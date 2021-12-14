import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create(
    {
        container: {
            width: '100%',
            padding: 10

        },

        button: {
            backgroundColor: 'gray',
            borderRadius: 20,
        },

        btnText: {
            marginVertical: '2%',
            textAlign: "center",
            fontSize: 15,
            fontWeight: '500',
            textTransform: 'uppercase'

        }
    }
)

export default styles;