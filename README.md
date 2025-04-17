This is a minimum repro of the react-native-selectable-text android crash issue.

The repository with the open-source code is located [here](https://github.com/Rob117/react-native-selectable-text).

The issue first appeared when migrating from react native ~0.72 to react native 0.77.2. I do not wish to use the new codegen modules feature (yet) - I simply want to get the android version working.

The issue that shows when trying to use the selectable text component is:

"Unable to add a view into a view that is not a ViewGroup."
