import React from 'react';
import { View, TextInput } from 'react-native';


// Styles
import styles from './SearchBox-styles';

function SearchBox({ placeholder, onChangeText, runSearch }: SearchBoxProps) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={(text: string) => onChangeText(text)}
                returnKeyType='search'
                onSubmitEditing={runSearch}
            />
        </View>
    )
}

export default SearchBox;

interface SearchBoxProps {
    placeholder: string,
    onChangeText: any,
    runSearch: any,
}
