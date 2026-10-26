import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const data_menu = [{
    id: 1,
    name: 'Kopi Kucing',
    harga: 25000
}, {
    id: 2,
    name: 'Teh Meong',
    harga: 15000
}, {
    id: 3,
    name: 'Juice Oyen',
    harga: 20000
}];

const App = () => {
    const [menu, setMenu] = useState(0);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu Minuman</Text>
            {data_menu.map((item) => (
                <View key={item.id} style={styles.menuItem}>
                    <Text style={styles.menuName}>{item.name}</Text>
                    <Text style={styles.menuPrice}>Rp {item.harga}</Text>
                </View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuItem: { 
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    menuName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuPrice: {
        fontSize: 16,
        color: '#888',
    },
});

export default App;