# Customize dock

Customize the dock with your favorite applications.

## Requirements

None

## Role Variables

| Variable                    | Description                      | Default |
| --------------------------- | -------------------------------- | ------- |
| `customize_dock_dock_items` | List of applications to be added | `[]`    |

`customize_dock_dock_items` is a list of dictionaries with the following keys:

| Key        | Description                                     |
| ---------- | ----------------------------------------------- |
| `name`     | Name of the application to be added to the dock |
| `path`     | Path of the application to be added to the dock |
| `position` | Position of the application in the dock         |

## Dependencies

This role depends on the following roles:

- community.general.homebrew_cask

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: andrea11.macos_setup.customize_dock
      customize_dock_dock_items:
        - name: "Safari"
          path: "/Applications/Safari.app"
          position: 1
```

## License

MIT

## Author Information

@andrea11
