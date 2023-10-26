# Setup java

Install java versions using sdkman, and add certificates to their store.

## Requirements

None

## Role Variables

| Variable                          | Description                                                | Default |
| --------------------------------- | ---------------------------------------------------------- | ------- |
| `setup_java_java_major_version`   | Major version of java to be installed                      | `17`    |
| `setup_java_certificate_websites` | List of websites to be added to the java certificate store | `[]`    |

`setup_java_certificate_websites` is a list of dictionaries with the following keys:

| Key     | Description                                                        |
| ------- | ------------------------------------------------------------------ |
| `url`   | Url of the website to be added to the java certificate store       |
| `alias` | Alias of the certificate to be added to the java certificate store |
| `port`  | Port of the website to be added to the java certificate store      |

## Dependencies

None

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: andrea11.macos_setup.setup_java
      setup_java_java_major_version: 11
      setup_java_certificate_websites:
        - url: "https://www.google.com"
          alias: "google"
          port: 443
```

## License

MIT

## Author Information

@andrea11
