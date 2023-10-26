class FilterModule(object):
    def filters(self):
        return {
            'format_macos_defaults': self.format_macos_defaults,
        }

    def format_macos_defaults(self, value):
        transformed_value = []
        if isinstance(value, dict):
            for key, item in value.items():
                formatted_item = f"{key} {item}"
                transformed_value.append(formatted_item)
            return transformed_value
        if isinstance(value, list):
            for item in value:
                transformed_value.append(item)
            return transformed_value
        if value is None:
            return [""]

        return [value]
