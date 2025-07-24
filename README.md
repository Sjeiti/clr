# MC Picker

*a minimal color picker*

Just add the script and the colorpicker will work on any `input[type=color]`. Even if you add them to DOM afterwards.

The implementation is minimal, the code is minimal, even the colorpicker itself is a mere six elements in a wrapper and some smart CSS.

Checkout https://sjeiti.github.io/clr/ for live examples.


## Installation

To install just do something like:

`npm i -S mc_picker` or `yarn add mc_picker -S`

Then just import it somewhere:

`import 'mc_picker'`


## Alpha channel

Although `input[type=color]` does not support alpha channels, you can add this by setting `[data-alpha=255]`. The value ranges from 0 to 255 and updates when changed.


## API

When activated, each input element exposes a color object: `document.querySelector('input').color`. All instances are also exposed on `globalThis.pickers`; a map with the `HTMLInputElement` as key.


## Customisation

You can easily adjust dimensions through CSS without affecting functionality:

```
.mcpicker {
  --mcp-w: 20rem;
  --mcp-h: 20rem;
  --mcp-gutter: 2rem;
  --mcp-font-size: 1.2rem;
}
```

This can also be done for a single instance when you use `.mcpicker_[color input id]` instead of `.mcpicker`.


## License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/Sjeiti/clr/master/LICENSE) file for details
