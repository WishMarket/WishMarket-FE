import React, { useState } from "react";
import ViewProfile from "./ViewProfile";
import ModifyProfile from "./ModifyProfile";

export default function ProfileComponent() {
    const [profileState, setProfileState] = useState(true);

    return (
        <div className="main">
            <div className="Profile_Title">Profile</div>
            <div className="Profile_Container">
                <div className="Profile_Wrapper">
                    {profileState ? <ViewProfile profileState={profileState} setProfileState={setProfileState} /> : <ModifyProfile profileState={profileState} setProfileState={setProfileState} />}
                </div>
            </div>
        </div>
    );
}
