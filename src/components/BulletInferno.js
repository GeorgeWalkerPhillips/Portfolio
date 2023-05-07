import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "GameBuild/Build/GameBuild.loader.js",
    dataUrl: "GameBuild/Build/GameBuild.data",
    frameworkUrl: "GameBuild/Build/GameBuild.framework.js",
    codeUrl: "GameBuild/Build/GameBuild.wasm",
});

function BulletInferno() {
    return <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }}/>;
}

export default BulletInferno
