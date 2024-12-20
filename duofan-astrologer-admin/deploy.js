// import our environment variables
import { configDotenv } from "dotenv";
import FtpDeploy from "ftp-deploy";

configDotenv({ path: ".env" });

// require ftp-deploy
var ftpDeploy = new FtpDeploy();

// if our LIVE_DEPLOY variable isn't set, or is not set
// to 'true', then we return without going any further
if (process.env.LIVE_DEPLOY !== "true") {
    console.warn("Deploy env is false, not deploying");
} else {
    var config = {
        // configure your FTP connection
        // these are the environment variables we set up earlier
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        host: process.env.FTP_HOST,
        port: 21,
        localRoot: "./dist",
        remoteRoot: "/",
        include: ["*", "**/*", ".*"],
        // with Gatsby, these should never make it into your public
        // folder anyway, but it's worth keeping these excludes here
        // to be on the safe-side
        exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*"],
        // set to true if you want it to delete all the existing remote
        // files first - I prefer not to
        deleteRemote: true,
        forcePasv: true
    };
    ftpDeploy.on("uploading", function (data) {
        console.log("Uploading ", data.transferredFileCount + 1, "/", data.totalFilesCount, ": ", data.filename);
    });
    // call ftp-deploy with our configuration from above
    ftpDeploy
        .deploy(config)
        .then((res) => console.log("FINISHED UPLOADING"))
        .catch((err) => console.log(err));
}
