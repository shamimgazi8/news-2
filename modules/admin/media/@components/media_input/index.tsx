import { Modal } from "antd";
import { useState } from "react";
import MediaList from "../..";
import { FiX } from "react-icons/fi";
import ReactPlayer from "react-player";

interface Props {
  onChange?: any;
  src?: string;
  type?: string;
  isShowDelete?: boolean;
  className?: {
    image_preview?: string;
  };
}

const MediaInput = ({
  onChange,
  src,
  type = "image",
  isShowDelete = true,
  className,
}: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mediaData, setMediaData] = useState();

  const ImagePreview = () => {
    return (
      <img
        // crossOrigin="anonymous"
        src={src ? src : "/images/misc/image-upload.jpg"}
        className={`w-full h-full object-cover ${
          className?.image_preview ? className?.image_preview : ""
        }`}
      />
    );
  };
  const VideoPreview = () => {
    return (
      <div>
        {!src ? (
          <img
            // crossOrigin="anonymous"
            src={"/images/misc/video-placeholder-big.png"}
            className="w-full h-full object-cover"
          />
        ) : (
          <ReactPlayer
            width={"auto"}
            height={"auto"}
            controls={true}
            url={src}
          />
        )}
      </div>
    );
  };

  const handleInsert = () => {
    if (onChange) {
      onChange({ data: mediaData });
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div onClick={() => setModalOpen(true)} className="cursor-pointer">
          {type === "image" ? <ImagePreview /> : null}
          {type === "video" ? <VideoPreview /> : null}
        </div>
        {isShowDelete ? (
          <>
            {mediaData && (
              <div className="absolute top-0 right-0 z-[100]">
                <button
                  onClick={() => {
                    setMediaData(undefined);
                    if (onChange) {
                      onChange(undefined);
                    }
                  }}
                  className="p-1 bg-black/[.5]"
                  type="button"
                >
                  <FiX className="text-white hover:text-red-500 transition-all" />
                </button>
              </div>
            )}
          </>
        ) : null}
      </div>

      <Modal
        className="media_insert_modal"
        centered
        title={<div className="p-4 border-b">Media Library</div>}
        width={"100%"}
        style={{
          maxWidth: "100%",
          width: "100%",
        }}
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          setMediaData(undefined);
          //   selectedRowKeys([]);
        }}
        footer={[
          <button
            onClick={() => {
              setModalOpen(false);
              setMediaData(undefined);
              //   selectedRowKeys([]);
            }}
            className={`btn btn-grey text-black `}
            type="button"
          >
            Cancel
          </button>,
          <button
            onClick={() => {
              handleInsert();
              setModalOpen(false);
            }}
            className="btn btn-secondary mt-0 mx-5 my-4"
            type="button"
          >
            Insert
          </button>,
        ]}
      >
        <div className={`p-5 pb-0 overflow-auto h-[calc(100vh-124px)]`}>
          <MediaList isMediaInput setMediaData={setMediaData} type={type} />
        </div>
      </Modal>
    </>
  );
};

export default MediaInput;
