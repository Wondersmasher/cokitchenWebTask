import React from "react";

function FileIcon({ fileType }) {
  const getIcon = () => {
    switch (fileType) {
      case "pdf":
        return <FontAwesomeIcon icon={faFilePdf} />;
      case "jpg":
      case "jpeg":
      case "png":
        return <FontAwesomeIcon icon={faFileImage} />;
      default:
        return <FontAwesomeIcon icon={faFile} />;
    }
  };

  return <div className="file-icon">{getIcon()}</div>;
}

export default FileIcon;
