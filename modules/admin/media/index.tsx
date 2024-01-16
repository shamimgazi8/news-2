import { Dropdown, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import ReactPlayer from "react-player";
import { useGetMediasQuery } from "@/appstore/media/media_api";
import { useState } from "react";
import { FiFile } from "react-icons/fi";
import MediaAdd from "./@components/add_new";
import CreateFolder from "./@components/create_folder";
import MediaFilter from "./@components/filter";
import MediaFolders from "./@components/folders";
import { useSelector, useDispatch } from "react-redux";
import { mediaFolderParentInfo } from "@/appstore/media/media_slice";
import moment from "moment";
import MediaActionView from "./@components/action_view";
import MediaActionsDropdown from "./@components/actions_dropdown";
import { formatBytes, generateQueryString } from "@/helpers/utils";
import { useTitle } from "@/hooks/useTitle";
import PageHeader from "@/modules/@common/page_header";

const MediaList = ({ isMediaInput, setMediaData, type }: any) => {
  useTitle("Media Library");
  const selectedFolder = useSelector((state: any) => state.mediaSlice);
  const dispatch = useDispatch();

  const [alignment, setAlignment] = useState(isMediaInput ? "grid" : "list"); // grid, list
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [open, setOpen] = useState(false);

  const [filtered, setFiltered] = useState<any>({
    page: page,
    limit: limit,
    directory_id: selectedFolder?.parent_id,
    title: "",
    startDate: "",
    endDate: "",
    category: "",
    type: type ? type : null,
  });

  const queryString = generateQueryString(filtered);
  const { data, isFetching, isError, error } = useGetMediasQuery(queryString);
  const dataMedia = data?.data;

  //  Pagination
  const paginationOptions = {
    showSizeChanger: true,
    showQuickJumper: true,
    defaultPageSize: limit,
    current: page,
    onChange: (page: any) => {
      setPage(page);
    },
    onShowSizeChange: (_: any, showItem: any) => {
      setLimit(showItem);
    },
    pageSizeOptions: [10, 20, 30, 50],
    total: data?.totalCount,
    showTotal: (total: number, range: any) =>
      `${range[0]} to ${range[1]} of ${total}`,
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    ...(isMediaInput && { type: "radio" }),
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: ColumnsType<any> = [
    {
      title: "File",
      dataIndex: "name",
      render: (_, record) => {
        let content;
        if (record?.type === "image") {
          content = (
            <img
              src={record.path}
              className="w-full h-full object-contain"
              alt={record.title}
            />
          );
        } else if (record?.type === "application") {
          content = (
            <img
              src="/images/misc/pdf-icon.png"
              className="w-full h-full object-contain"
              alt={record.title}
            />
          );
        } else if (record?.type === "video") {
          content = (
            <>
              <ReactPlayer url={record?.path} />
            </>
          );
        }
        return (
          <div className="w-[60px] h-[60px] flex items-center justify-center">
            {content}
          </div>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "title",
      ellipsis: true,
    },
    {
      title: "Alt",
      dataIndex: "alt",
      ellipsis: true,
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Size",
      dataIndex: "file_size",
      render: (_, record) => {
        return <span>{formatBytes(record?.file_size)}</span>;
      },
    },
    {
      title: "Last Updated",
      render: (record) => {
        return (
          <span className="">{moment(record.updatedAt).format("LL")}</span>
        );
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center gap-3 text-lg">
            <MediaActionView data={record} />
            <MediaActionsDropdown record={record} />
          </div>
        );
      },
    },
  ];
  const columnsGrid: ColumnsType<any> = [
    {
      title: "Image",
      dataIndex: "name",
      render: (_, record) => {
        let content;
        if (record?.type === "image") {
          content = (
            <img
              src={record.path}
              className="w-full h-full object-contain"
              alt={record.title}
            />
          );
        } else if (record?.type === "application") {
          content = (
            <img
              src="/images/misc/pdf-icon.png"
              className="w-full h-full object-contain"
              alt={record.title}
            />
          );
        } else if (record?.type === "video") {
          content = (
            <div>
              <ReactPlayer width={"auto"} height={"auto"} url={record?.path} />
            </div>
          );
        } else {
          content = <></>;
        }
        return (
          <div className="w-full group relative bg-greylight rounded-lg h-[100px] flex flex-col items-center justify-center cursor-pointer">
            <div className="z-[1000] absolute cursor-default left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-white drop-shadow-lg rounded-md pl-4 pr-3 py-2 hidden group-hover:flex items-center justify-center gap-3 text-lg">
              <MediaActionView data={record} />
              <MediaActionsDropdown record={record} />
            </div>
            {content}
          </div>
        );
      },
    },
  ];

  // for media insert only
  const handleRowClick = (record: any) => {
    if (setMediaData) {
      setMediaData(record);
    }
    setSelectedRowKeys([record?.id]);
  };
  const rowEventHandlers = (record: any) => {
    return {
      onClick: () => handleRowClick(record), // Call your custom row click handler
    };
  };

  return (
    <div className="">
      {!isMediaInput ? (
        <PageHeader
          title="Media Library"
          breadcrumbsData={[
            { title: "Dashboard", link: "/dashboard" },
            { title: "Media Library" },
          ]}
        />
      ) : null}

      {/* list design */}
      <div
        className={`grid grid-cols-[330px_1fr] gap-5 ${
          isMediaInput ? "" : "mt-5"
        }`}
      >
        {/* left side */}
        <div className="">
          <Dropdown
            // placement="top"
            open={open}
            trigger={["click"]}
            onOpenChange={() => setOpen(!open)}
            dropdownRender={() => (
              <div className="bg-white rounded-md py-2 drop-shadow-xl">
                <div onClick={() => setOpen(false)}>
                  <CreateFolder setFiltered={setFiltered} />
                </div>
                <div onClick={() => setOpen(false)}>
                  <MediaAdd>
                    <button
                      type="button"
                      className="flex items-center gap-2 text-sm py-1.5 px-7 hover:bg-greylight hover:text-inherit w-full"
                    >
                      <FiFile />
                      <span>File Upload</span>
                    </button>
                  </MediaAdd>
                </div>
              </div>
            )}
          >
            <button type="button" className="btn btn-secondary w-full">
              Add Files
            </button>
          </Dropdown>

          {/* tree */}
          <div className="pb-4">
            <div className="mt-1">
              <div
                onClick={() => {
                  dispatch(
                    mediaFolderParentInfo({
                      parent_id: "",
                    })
                  );
                  setFiltered((prev: any) => ({ ...prev, directory_id: "" }));
                }}
                className={`py-1 pl-3 cursor-pointer text-sm ${
                  selectedFolder?.parent_id ? "" : "bg-[#0b3a5d] text-white"
                }`}
              >
                All
              </div>
            </div>
            <MediaFolders setFiltered={setFiltered} />
          </div>
        </div>

        {/* right side */}
        <div className={``}>
          <MediaFilter
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys}
            filtered={filtered}
            setFiltered={setFiltered}
            alignment={alignment}
            setAlignment={setAlignment}
            isMediaInput={isMediaInput}
            type={type}
          />
          <div>
            <div className="font-medium mb-3">
              {selectedFolder.parent_id ? selectedFolder?.title : "All"}
            </div>
            <Table
              rowKey={`id`}
              rowSelection={isMediaInput ? rowSelection : null}
              dataSource={dataMedia}
              columns={alignment == "grid" ? columnsGrid : columns}
              className={`table_media ${
                alignment == "grid" ? "table_media_grid" : ""
              }`}
              loading={isFetching}
              pagination={paginationOptions}
              onRow={rowEventHandlers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaList;
