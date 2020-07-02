## react-native-phone-codes-select

Country phone codes selection component with search functionality for React Native. (iOS and Android)

<img src="./assets/phone-select-gif.gif" height="500">

### Installation

```javascript
npm i react-native-phone-code-select
```

### Usage

- Import and place the component.
- Since the component is a modal, `visible` prop should be controlled. Hooking up the visible prop to a state is demonstrated below.
- The country selected from the modal is returned in the onCountryPress prop.
- Country name, code or phone code can be entered to the search.

```javascript
import RNPhoneCodeSelect from "react-native-phone-code-select";

<RNPhoneCodeSelect
  visible={visible}
  onDismiss={() => setVisible(false)}
  onCountryPress={(country) => setSelectedCountry(country)}
  primaryColor="#f04a4a"
  secondaryColor="#000000"
  buttonText="Ok"
/>;
```

### Configuration Props

| Prop            | Type                                               | Description                                                                                                                                     |
| --------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| visible         | Boolean                                            | The visibility of the modal. If true the modal will be shown and vice versa.                                                                    |
| onDismiss       | Function                                           | Function that will be fired when the 'Done' button is pressed.                                                                                  |
| onCountryPress  | Function                                           | Function that fires when a country from the list is selected. A 'country' parameter is included as a `Country` Object. (See below for details.) |
| primaryColor    | [Color](https://reactnative.dev/docs/colors)       | The primary color used in the component.                                                                                                        |
| secondaryColor  | [Color](https://reactnative.dev/docs/colors)       | The secondary color used in the component.                                                                                                      |
| buttonStyle     | [Style Object](https://reactnative.dev/docs/style) | Not required. Extra styling for button background.                                                                                              |
| buttonTextStyle | [Style Object](https://reactnative.dev/docs/style) | Not required. Extra styling for button text.                                                                                                    |
| buttonText      | String                                             | Not required. Custom text for 'Done' button.                                                                                                    |

### Country Object

```javascript
{
  name: "Turkey",
  flag: "🇹🇷",
  code: "TR",
  dial_code: "+90"
}
```

### Example Usage

```javascript
import RNPhoneCodeSelect from "react-native-phone-code-select";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)} title="Show Modal" />
      <RNPhoneCodeSelect
        visible={visible}
        onDismiss={() => setVisible(false)}
        onCountryPress={(country) => setSelectedCountry(country)}
        primaryColor="#f04a4a"
        secondaryColor="#000000"
        buttonText="Ok"
      />
    </View>
  );
}
```
