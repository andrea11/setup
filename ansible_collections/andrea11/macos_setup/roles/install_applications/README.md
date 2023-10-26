# Install applications

Install applications on macOS using homebrew.

## Requirements

None

## Role Variables

| Variable                        | Description                          | Default |
| ------------------------------- | ------------------------------------ | ------- |
| `install_applications_taps`     | List of homebrew taps to install     | `[]`    |
| `install_applications_formulae` | List of homebrew formulae to install | `[]`    |
| `install_applications_casks`    | List of homebrew casks to install    | `[]`    |

`install_applications_taps`, `install_applications_formulae`, and `install_applications_casks` are lists of strings.

If you want to install a cask that requires sudo privileges, you can use the `sudo_password` variable. Set it in your playbook, for example:

```yaml
vars_prompt:
  - name: sudo_password
    prompt: "Enter your sudo password"
    private: yes
    unsafe: true
```

## Dependencies

None

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: andrea11.macos_setup.install_applications
      install_applications_taps:
        - homebrew/cask-fonts
      install_applications_formulae:
        - vim
      install_applications_casks:
        - 1password
```

## License

MIT

## Author Information

@andrea11
