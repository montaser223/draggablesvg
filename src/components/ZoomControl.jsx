import { green, red } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import React from "react";

export default function ZoomControle({
  handelZoomIn,
  handelZoomOut,
  handelResetScale,
  scale,
}) {
  return (
    <div className="mt-5 text-center">
      <div>
        <h6 className="text-info">Control Zoom</h6>
        <button
          className="btn mx-2"
          disabled={scale > 3}
          onClick={handelZoomIn}
        >
          <Icon style={{ color: green[500] }}>add_circle</Icon>
        </button>
        <button className="btn" disabled={scale < 0.4} onClick={handelZoomOut}>
          <RemoveCircleIcon
            style={{
              color: red[500],
              marginBottom: "5px",
            }}
          />
        </button>
        <button
          className="btn"
          disabled={scale < 0.4}
          onClick={handelResetScale}
        >
          <SettingsBackupRestoreIcon style={{ marginBottom: "5px" }} />
        </button>
      </div>
      {scale !== 1 && (
        <div
          style={{
            display: "inline-block",
          }}
          className="alert alert-info m-2"
        >
          You Can't drop images in Zoom mode
        </div>
      )}
    </div>
  );
}
