# Setup python

Install latest python version using pyenv.

## Requirements

None

## Role Variables

| Variable                             | Description                        | Default |
| ------------------------------------ | ---------------------------------- | ------- |
| `setup_python_python_versions`       | List of python versions to install | `[]`    |
| `setup_python_python_packages`       | List of python packages to install | `[]`    |
| `setup_python_python_global_version` | Global python version to use       | ``      |

If `setup_python_python_versions` is empty, latest stable python version will be installed.
If `setup_python_python_global_version` is empty, latest `setup_python_python_versions` will be used instead. If no `setup_python_python_versions`, the latest stable python version will be used.

## Dependencies

None

## Example Playbook

```yaml
- hosts: localhost
  roles:
    - role: andrea11.macos_setup.setup_python
      setup_python_python_versions:
        - 3.11.6
      setup_python_python_packages:
        - jmespath
```

## License

MIT

## Author Information

@andrea11
