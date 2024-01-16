"use client";
import { copyHandler, generateQueryString } from "@/helpers/utils";
import { useTitle } from "@/hooks/useTitle";
import { Modal, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { ReactNode, useState } from "react";
import { MdContentCopy } from "react-icons/md";

import PageHeader from "@/modules/@common/page_header";
import { useGetAllPostsQuery } from "@/appstore/news/news_api";
import Image from "next/image";

import CategoryDeleteMultiple from "../topic/list/delete_multiple";
import NewsAction from "../@components/action_column";

interface DataType {
  key: React.Key;
  id: string;
  title: string;
  newsCount: any;
  status: string;
  slug: string;
  searchKeyword: string;
  action: ReactNode;
  featuredImage: string;
  contentType: string;
  newsType: string;
}

const NewsList = () => {
  useTitle("All News");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [ids, setIds] = useState([]);
  const [moreKeyword, setmoreKeyword] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTrash, setIsTrash] = useState<any>(false);

  const queryParams = {
    isTrash,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isFetching } = useGetAllPostsQuery({
    isTrash,
  });
  console.log(data);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
    total: data?.meta?.total,
    showTotal: (total: number, range: any) =>
      `${range[0]} to ${range[1]} of ${total}`,
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Featured Image",
      dataIndex: "featuredImage",
      key: "id",
      render: (_, record) => {
        console.log(record);
        return (
          <Image
            src={
              record.featuredImage
                ? `${record.featuredImage}`
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="featredImg"
            height={50}
            width={50}
            className=" object-cover hover:scale-110 duration-300"
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <div className="flex flex-wrap gap-2 items-center">
            <p className="text-[14px] mb-0">{record?.title}</p>
          </div>
        );
      },
    },
    {
      title: "Category Slug",
      dataIndex: "slug",
      key: "slug",
      render: (_, record) => {
        return (
          <>
            {record?.slug ? (
              <>
                {isTrash ? (
                  <div>{record?.slug}</div>
                ) : (
                  <Tooltip placement="top" title={"Copy Slug"}>
                    <div
                      className="inline-flex items-center gap-1 cursor-pointer"
                      onClick={() => copyHandler(record?.slug)}
                    >
                      {record?.slug} <MdContentCopy />
                    </div>
                  </Tooltip>
                )}
              </>
            ) : null}
          </>
        );
      },
    },
    {
      title: "Content Type",
      dataIndex: "contentType",
      key: "Slug",
      width: "14%",
      render: (_, record) => {
        const splite = record?.contentType?.split(",");
        const sliced = splite?.slice(0, 4);

        return (
          <>
            {sliced?.map((item: any, i: any) => {
              return item === "" ? (
                ""
              ) : (
                <div className="inline-flex items-center gap-1.5" key={i}>
                  <div
                    key={i}
                    className="inline-flex items-center gap-4 bg-[#E2EDF9] px-3 py-1 rounded-full text-[#4E92DF] "
                  >
                    {item}
                  </div>
                  <span>
                    {i >= 3 && (
                      <button
                        onClick={() => {
                          showModal();
                          setmoreKeyword(splite);
                        }}
                      >
                        See More
                      </button>
                    )}
                  </span>
                </div>
              );
            })}
          </>
        );
      },
    },
    {
      title: "News Type",
      dataIndex: "newsType",
      key: "Slug",
      width: "14%",
      render: (_, record) => {
        const splite = record?.newsType?.split(",");
        const sliced = splite?.slice(0, 4);

        return (
          <>
            {sliced?.map((item: any, i: any) => {
              return item === "" ? (
                ""
              ) : (
                <div className="inline-flex items-center gap-1.5" key={i}>
                  <div
                    key={i}
                    className="inline-flex items-center gap-4 bg-[#E2EDF9] px-3 py-1 rounded-full text-[#4E92DF] "
                  >
                    {item}
                  </div>
                  <span>
                    {i >= 3 && (
                      <button
                        onClick={() => {
                          showModal();
                          setmoreKeyword(splite);
                        }}
                      >
                        See More
                      </button>
                    )}
                  </span>
                </div>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => <span>{record?.status}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      align: "right",
      render: (_, record) => <NewsAction isTrash={isTrash} record={record} />,
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      const getId: any = selectedRows?.map((item) => item.id);
      setIds(getId);
    },
  };

  return (
    <div className="">
      <PageHeader
        breadcrumbsData={[
          { title: "Admin", link: "/admin" },
          { title: "News" },
        ]}
        title={"News"}
        btnTitle="Add News"
        btnLink="/admin/news/add"
        setKeyword={setKeyword}
      />

      <div className="flex justify-between items-center my-4 gap-[10px]">
        <div className="flex gap-3">
          <button
            onClick={() => {
              setIsTrash(false);
              setIds([]);
              setPage(1);
            }}
            type="button"
            className={`btn ${
              !isTrash ? "btn-secondary" : "btn-white-outline"
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setIsTrash(true);
              setIds([]);
              setPage(1);
            }}
            type="button"
            className={`btn ${isTrash ? "btn-secondary" : "btn-white-outline"}`}
          >
            Trash
          </button>
          {/* multiple delete */}
          {ids?.length > 0 && !isTrash ? (
            <CategoryDeleteMultiple ids={ids} setIds={setIds} />
          ) : null}
        </div>

        <div className="flex items-center gap-3">
          {/* <div>more filter</div> */}
        </div>
      </div>

      <div>
        <Table
          rowKey="id"
          {...(!isTrash && {
            rowSelection: {
              type: "checkbox",
              ...rowSelection,
            },
          })}
          columns={columns}
          dataSource={data?.data}
          pagination={paginationOptions}
          loading={isFetching}
        />
      </div>

      <div>
        <Modal
          title={
            <div className="flex items-center gap-2 px-6 py-4 border-b">
              <span>Search Keyword</span>
            </div>
          }
          open={isModalOpen}
          width={"100%"}
          style={{ maxWidth: 625, width: "100%", padding: 0 }}
          onCancel={handleCancel}
          footer={false}
        >
          <div className="px-6 py-4">
            <div className="flex flex-wrap gap-1.5 py-5">
              {moreKeyword?.map((item: any, i: any) => {
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-4 bg-[#E2EDF9] px-3 py-1 rounded-full text-[#4E92DF]"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end gap-3">
              <button className="btn btn-grey" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NewsList;
