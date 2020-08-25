import React from "react"
import Uppy from "@uppy/core"
import Tus from "@uppy/tus"
import { Dashboard } from "@uppy/react"
import "@uppy/dashboard/dist/style.css"
import Chinese from "@uppy/locales/lib/zh_CN"

function Upload(props) {
    const uppy = new Uppy({
        meta: props.meta || {},
        restrictions: {
            maxNumberOfFiles: props.maxNumberOfFiles || null,
            allowedFileTypes: props.allowedFileTypes || null,
            maxFileSize: props.maxFileSize || null, //  byte
        },
        autoProceed: props.autoProceed || false,
        locale: Chinese,
    })

    uppy.use(Tus, { endpoint: props.endpoint })

    uppy.on("complete", (result) => {
        const url = result.successful[0].uploadURL
        console.log(url)
        props.onComplete && props.onComplete(result)
    })

    return (
        <div>
            <Dashboard
                uppy={uppy}
                locale={{
                    strings: {
                        dropPaste: "拖到这里或点击 %{browse}",
                        browse: "上传",
                        poweredBy2: "Powered by Put",
                    },
                }}
            />
        </div>
    )
}

export default Upload
