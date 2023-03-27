// Use https://finicky-kickstart.now.sh to generate basic configuration
// Learn more about configuration options: https://github.com/johnste/finicky/wiki/Configuration

module.exports = {
  defaultBrowser: "Google Chrome",
  options: {
    hideIcon: false,
    checkForUpdate: true,
  },
  handlers: [
    {
      match: ({ opener }) =>
        ["Slack"].includes(opener.name),
      browser: () => {
        finicky.log("opening profile 1");
        return {
          name: "Google Chrome",
          profile: "Default",
        }
      },
    },
    {
      match: ({ url }) => url.protocol === "slack",
      browser: () => {
        finicky.log("opening profile 1");
        return {
          name: "Google Chrome",
          profile: "Default",
        }
      },
    },
  ],
};
