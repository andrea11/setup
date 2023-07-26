module.exports = {
    defaultBrowser: "Safari",
    rewrite: [
      {
        // Redirect all urls to use https
        match: ({ url }) => url.protocol === "http",
        url: { protocol: "https" }
      }
    ],
    handlers: [
      {
        // Open any url that includes the string "workplace" in Firefox
        match: [/nexthink/],
        browser: "Google Chrome"
      },
      {
        match: ({opener}) =>
        opener.name === "Microsoft Teams",
        browser: "Google Chrome"
      },
      {
        match: ({opener}) =>
        opener.name === "Microsoft Outlook",
        browser: "Google Chrome"
      },
      {
        match: ({url}) =>
        url.host === "device.sso.eu-central-1.amazonaws.com",
        browser: "Google Chrome"
      },
      {
        match: () => finicky.getKeys().function,
        browser: "Google Chrome"
      }
      // {
      //   match: (obj) => finicky.log(obj),
      //   browser: "Google Chrome"
      // }
    ]
  };
