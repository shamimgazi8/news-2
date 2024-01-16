import { useBulkDeleteMediaMutation } from "@/appstore/media/media_api";
import { DatePicker, Popconfirm, Select, message } from "antd";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { TbListDetails } from "react-icons/tb";
import MediaAddNew from "../add_new";
const { RangePicker } = DatePicker;

interface propTypes {
  selectedRowKeys?: any;
  setSelectedRowKeys?: any;
  filtered?: any;
  setFiltered?: any;
  alignment?: any;
  setAlignment?: any;
  isMediaInput?: any;
  type?: any;
}

const MediaFilter = ({
  selectedRowKeys,
  setSelectedRowKeys,
  setFiltered,
  filtered,
  alignment,
  setAlignment,
  isMediaInput,
  type,
}: propTypes) => {
  const [deletIds] = useBulkDeleteMediaMutation();
  const [dateRange, setDateRange] = useState<any>([]);

  const confirm = async (ids: any) => {
    const idsArray = ids.join(",");
    try {
      const res: any = await deletIds({
        ids: idsArray,
      });
      if (!res?.error) {
        message.success("Media delete successfully.");
        setSelectedRowKeys([]);
      } else {
        if (res?.error?.status >= 500) {
          message.error("Somthing went wrong.");
        } else {
          message.error(
            `${
              res?.error?.data?.message
                ? res?.error?.data?.message
                : "Somthing went wrong"
            }`
          );
        }
      }
    } catch (err) {}
  };

  return (
    <div className="flex items-center justify-between mb-2">
      <div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <FiSearch className="absolute text-[#9ca3af] top-[50%] left-[10px] -translate-y-[50%]" />
            <input
              type="text"
              name="searchString"
              placeholder="Search by Name"
              className="w-full border py-[5px] pr-4 pl-8 text-sm  placeholder:text-[#364a6340]"
              onChange={(e: any) => {
                setFiltered((prevState: any) => ({
                  ...prevState,
                  searchString: e.target.value,
                }));
              }}
              value={filtered.searchString ?? ""}
            />
          </div>

          <Select
            disabled={type ? true : false}
            className="media_search_select text-sm placeholder:text-sm w-[150px] rounded-sm h-[32px]"
            allowClear
            showSearch
            placeholder="File Type"
            onChange={(val: any) =>
              setFiltered((prevState: any) => ({
                ...prevState,
                type: val,
              }))
            }
            options={[
              {
                value: "image",
                label: "Image",
              },
              {
                value: "video",
                label: "Video",
              },
              {
                value: "doc",
                label: "DOC",
              },
            ]}
            value={filtered.type ?? undefined}
          />

          <div className="max-w-[240px]">
            <RangePicker
              value={dateRange}
              className="media_search_date"
              onChange={(data: any, dateString) => {
                setDateRange(data);
                setFiltered((prevState: any) => ({
                  ...prevState,
                  startDate: dateString[0],
                  endDate: dateString[1],
                }));
              }}
            />
          </div>

          <button
            onClick={() => {
              setFiltered({
                searchString: "",
                startDate: null,
                endDate: null,
                category: "",
                type: undefined,
              });
              setDateRange([]);
            }}
            type="button"
            className="btn btn-grey py-[6px]"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="text-xl flex gap-2 items-center">
        {/* {selectedRowKeys.length > 0 && (
          <Popconfirm
            placement="top"
            title={<span>Are you sure to delete this file?</span>}
            description=""
            onConfirm={() => confirm(selectedRowKeys)}
            okText={"Yes"}
            cancelText="No"
          >
            <button className={`btn bg-[#FF0000] text-white`}>Delete</button>
          </Popconfirm>
        )} */}

        {!isMediaInput ? (
          <>
            <button
              onClick={() => setAlignment("grid")}
              type="button"
              className={`border border-grey p-2 rounded hover:bg-greylight hover:border-transparent transition-all ${
                alignment == "grid" ? "bg-greylight" : ""
              }`}
            >
              <RxDashboard />
            </button>
            <button
              onClick={() => setAlignment("list")}
              type="button"
              className={`border border-grey p-2 rounded hover:bg-greylight hover:border-transparent transition-all ${
                alignment == "list" ? "bg-greylight" : ""
              }`}
            >
              <TbListDetails />
            </button>
          </>
        ) : null}

        <div className="ml-2">
          <MediaAddNew />
        </div>
      </div>
    </div>
  );
};

export default MediaFilter;
