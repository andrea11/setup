# Project Name

![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![CI](https://github.com/andrea11/setup/actions/workflows/ci.yml/badge.svg)](https://github.com/andrea11/setup/actions/workflows/ci.yml)

A brief description of what this project does and who it's for

## Table of Contents

- [MacOS setup](#MacOs-setup)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## About

This project is a collection of ansible roles to setup a MacOS machine.

## Getting Started

Explore the roles and their documentation to understand what they do and how to use them.
This project is an ansible collection, so every time you change something in the roles, you need to install them again with:

```bash
  ansible-galaxy install -r requirements.yml --force
```

Then you can run the playbook with:

```bash
  ansible-playbook --inventory ./localhost <playbook>
```

### Vault

If you have any sensitive data, you can encrypt it with ansible-vault.
First create one password file, for example:

```bash
  echo "password" > .vault_pass
```

Then encrypt the data with the following command:

```bash
  ansible-vault encrypt_string "<private key>" --vault-password-file .vault_pass --output -
```

Finally, you can use the output in your playbook, with the !vault tag, for example:

```yaml
secret: !vault |
  $ANSIBLE_VAULT;1.1;AES256 34333838643232653464666431393337663135386434626632393663623733336433666561326634  2028292827622462246222242662653831336231303630610a643338658089826166646588688862  55576462516666655254525565546462525764515665545854555166565555598561818089618289  6488888185848839990a9299949565999565699165976265303636323531643465326430643837356236
```

When you run the playbook, you need to pass the vault password file:

```bash
  ansible-playbook --inventory ./localhost <playbook> --vault-password-file .vault_pass
```

### Prerequisites

The following software is required to be installed on your system:

- [Ansible](https://www.ansible.com/)
- [Python](https://www.python.org/)

## Usage

```bash
  python3 -m pip install --user ansible # Install ansible
  ansible-galaxy install -r requirements.yml # Install roles
  ansible-playbook --inventory ./localhost main.yml --vault-password-file .vault_pass # Run playbook
```

## Roadmap

- Add more roles
- Add more tests

## Contributing

Feel free to contribute to this project by forking it and opening a pull request.
