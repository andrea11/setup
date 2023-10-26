# Setup zsh

It configures zsh shell. It can setup oh-my-zsh, sdkman, nvm and gpg.

## Requirements

None

## Role Variables

| Variable                      | Description                        | Default       |
| ----------------------------- | ---------------------------------- | ------------- |
| `setup_zsh_aliases`           | List of aliases to add to `.zshrc` | `[]`          |
| `setup_zsh_use_oh_my_zsh`     | Whether to configure oh-my-zsh     | `false`       |
| `setup_zsh_oh_my_zsh_plugins` | List of plugins to configure       | `[]`          |
| `setup_zsh_use_sdkman`        | Whether to configure sdkman        | `false`       |
| `setup_zsh_use_nvm`           | Whether to configure nvm           | `false`       |
| `setup_zsh_use_gpg`           | Whether to configure gpg           | `false`       |
| `setup_zsh_default_editor`    | Default editor to use              | `code --wait` |

`setup_zsh_aliases` is a list of dictionaries with the following keys:

| Key       | Description           |
| --------- | --------------------- |
| `alias`   | Alias to be added     |
| `command` | Command to be aliased |

`setup_zsh_oh_my_zsh_plugins` is a list of strings with the names of the plugins to be configured. The list of available plugins can be found [here](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins)

## Dependencies

None

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: andrea11.macos_setup.setup_zsh
      setup_zsh_aliases:
        - alias: ..
          command: cd ..
        - alias: ...
          command: cd ../..
        - alias: ....
          command: cd ../../..
      setup_zsh_use_oh_my_zsh: true
      setup_zsh_oh_my_zsh_plugins:
        - git
        - zoxide
      setup_zsh_use_sdkman: false
      setup_zsh_use_nvm: true
      setup_zsh_use_gpg: false
      setup_zsh_default_editor: idea --temp-project --wait myfile.txt
```

## License

MIT

## Author Information

@andrea11
