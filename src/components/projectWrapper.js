import React, { useState } from 'react';

export default function ProjectWrapper({ preview, info }) {
    const [active, setActive] = useState(false);

    const previewActive = active ? 'infoVisible' : 'infoHidden';

    return (
        <div className="projectWrapper">
            <div className={`slideReel ${previewActive}`}>
                <div className="projectPreview" onClick={() => setActive(!active)}>
                    {preview}
                </div>
                <div className="projectInfo" onClick={() => setActive(!active)}>
                    {info}
                </div>
            </div>
        </div>
    )
}