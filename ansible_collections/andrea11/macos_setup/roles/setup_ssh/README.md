# Setup ssh

It configures ssh. Different ssh accounts can be configured in different workspaces.
This is useful if you have multiple ssh accounts.

## Requirements

None

## Role Variables

| Variable                   | Description                        | Default |
| -------------------------- | ---------------------------------- | ------- |
| `setup_ssh_configurations` | List of configurations to be added | `[]`    |

`setup_ssh_configurations` is a list of dictionaries with the following keys:

| Key                    | Description                      |
| ---------------------- | -------------------------------- |
| `name`                 | Name of the configuration        |
| `allowed_signers_path` | Path of the allowed signers file |
| `user_email`           | User email                       |
| `signature`            | Signature keys                   |
| `authentication`       | Authentication keys              |

`signature` is a dictionary with the following keys:

| Key           | Description                         |
| ------------- | ----------------------------------- |
| `algorithm`   | Algorithm used to generate the keys |
| `private_key` | Private key for signature           |
| `public_key`  | Public key for signature            |

`authentication` is a dictionary with the following keys:

| Key          | Description                         |
| ------------ | ----------------------------------- |
| `algorithm`  | Algorithm used to generate the keys |
| `public_key` | Public key for authenticate ssh     |

## Dependencies

None

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: andrea11.macos_setup.setup_ssh
      setup_ssh_configurations:
        - name: work
          allowed_signers_path: "{{ lookup('env', 'HOME') }}/.ssh/allowed_signers"
          user_email: <name>.<surname>@<company>.com
          signature:
            algorithm: ed25519
            private_key: <signature private key>
            public_key: <signature public key>
          authentication:
            algorithm: ed25519
            public_key: <authentication public key>
        - name: personal
          allowed_signers_path: "{{ lookup('env', 'HOME') }}/.ssh/allowed_signers"
          user_email: <nickname>@<company>.com
          signature:
            algorithm: ed25519
            private_key: <signature private key>
            public_key: <signature public key>
          authentication:
            algorithm: ed25519
            public_key: <signature public key>
```

## License

MIT

## Author Information

@andrea11
