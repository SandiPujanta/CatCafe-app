import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Menerima props menggunakan object destructuring
const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);

  const handlePress = () => {
    setQty(qty + 1);       
    onTambahPesanan();    
  };

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{nama}</Text>
        <Text style={styles.price}>Rp {harga}</Text>
        <Text style={styles.qty}>Dipesan: {qty}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Tambah Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', padding: 15, 
    backgroundColor: '#fff', 
    marginBottom: 10, 
    borderRadius: 8, 
    elevation: 2 },
  name: { 
    fontSize: 16, 
    fontWeight: 'bold' 
},
  price: { 
    fontSize: 14, 
    color: '#666', 
    marginVertical: 4 
},
  qty: { 
    fontSize: 14, 
    color: '#000' },
  button: { 
    backgroundColor: '#ff8c00', 
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    borderRadius: 6 
},
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
}
});

export default MenuItem;