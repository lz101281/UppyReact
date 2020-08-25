import React from "react"
import Upload from "./Upload"

function Use() {
    return (
        <Upload
            onComplete={(e) => console.log(e)}
            endpoint="http://192.168.1.1:9999/upload/"
            maxFileSize={10485760}
            allowedFileTypes={["video/*"]}
        />
    )
}

export default Use
