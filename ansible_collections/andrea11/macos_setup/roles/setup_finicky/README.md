# Setup finicky

Finicky is a macOS application that allows you to set up rules that decide which browser is opened for every link

## Requirements

None

## Role Variables

| Variable                               | Description                          | Default  |
| -------------------------------------- | ------------------------------------ | -------- |
| `setup_finicky_setup_finicky_rules`    | List of rules to be added to finicky | `[]`     |
| `setup_finicky_default_browser`        | Default browser to be used           | `Safari` |
| `setup_finicky_redirect_http_to_https` | Redirect http to https               | `true`   |

`setup_finicky_setup_finicky_rules` is a list of dictionaries with the following keys:

| Key       | Description                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| `match`   | Match condition (cf. [finicky documentation](https://github.com/johnste/finicky/wiki/Configuration#matching-urls)) |
| `browser` | Browser to be used                                                                                                 |

## Dependencies

None

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: andrea11.macos_setup.setup_finicky
      setup_finicky_default_browser: "Firefox"
      setup_finicky_redirect_http_to_https: true
      setup_finicky_setup_finicky_rules:
        - match: "finicky.dev"
          browser: "Google Chrome"
        - match: ["github.com", "gitlab.com"]
          browser: "Firefox"
        - match: ({ opener }) => opener.name === "Microsoft Teams"
          browser: "Microsoft Edge"
```

## License

MIT

## Author Information

@andrea11
