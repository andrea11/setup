# Customize defaults

Customize the defaults of your system.

## Requirements

None

## Role Variables

| Variable                      | Description      | Default |
| ----------------------------- | ---------------- | ------- |
| `customize_defaults_settings` | List of defaults | `[]`    |

`customize_defaults_settings` is a list of dictionaries with the following keys:

| Key           | Description                                          |
| ------------- | ---------------------------------------------------- |
| `domain`      | Domain of the default to be set                      |
| `key`         | Key of the default to be set                         |
| `value`       | Value of the default to be set                       |
| `type`        | Type of the default to be set                        |
| `state`       | State of the default to be set                       |
| `currentHost` | Whether to set the default for the current host only |

Read more about the `osx_defaults` module [here](https://docs.ansible.com/ansible/latest/collections/community/general/osx_defaults_module.html).

## Dependencies

This role depends on the following roles:

- community.general.osx_defaults

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: andrea11.macos_setup.customize_dock
      customize_defaults_settings:
        - domain: com.apple.AppleMultitouchTrackpad
          key: Clicking
          value: 1
          type: int
          state: present
        - domain: Apple Global Domain
          key: com.apple.mouse.tapBehavior
          value: 1
          type: integer
          currentHost: true
```

## License

MIT

## Author Information

@andrea11
