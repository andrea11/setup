# Setup git

It configures git. Different git accounts can be configured in different workspaces.
This is useful if you have multiple git accounts.

## Requirements

None

## Role Variables

| Variable                   | Description                         | Default       |
| -------------------------- | ----------------------------------- | ------------- |
| `setup_git_workspaces`     | List of workspaces to be configured | `[]`          |
| `setup_git_default_editor` | Default editor to use               | `code --wait` |

`setup_git_workspaces` is a list of dictionaries with the following keys:

| Key          | Description                        |
| ------------ | ---------------------------------- |
| `name`       | Name of the workspace              |
| `path`       | Path of the workspace              |
| `user_name`  | User name of the workspace         |
| `user_email` | User email of the workspace        |
| `ssh`        | SSH configuration of the workspace |

`ssh` is a dictionary with the following keys:

| Key                    | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `public_key_path`      | Path of the public key of the workspace           |
| `allowed_signers_path` | Path of the allowed signers file of the workspace |
| `program`              | Program to sign the ssh requests                  |

## Dependencies

None

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: setup_git
      setup_git_workspaces:
        - name: "work"
          path: "{{ lookup('env', 'HOME') }}/Work"
          user_name: Name Surname
          user_email: <name>.<surname>@<company>.com
          ssh:
            public_key_path: "{{ lookup('env', 'HOME') }}/.ssh/work_rsa.pub"
            allowed_signers_path: "{{ lookup('env', 'HOME') }}/.ssh/allowed_signers"
        - name: "personal"
          path: "{{ lookup('env', 'HOME') }}/Personal"
          user_name: Nickname
          user_email: <nickname>@gmail.com
          ssh:
            program: /Applications/1Password.app/Contents/MacOS/op-ssh-sign
            public_key_path: "{{ lookup('env', 'HOME') }}/.ssh/personal_rsa.pub"
            allowed_signers: "{{ lookup('env', 'HOME') }}/.ssh/allowed_signers"
      setup_git_default_editor: idea --temp-project --wait myfile.txt
```

## License

MIT

## Author Information

@andrea11
