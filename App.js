import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MenuItem from './MenuItem';
import OrderSummary from './OrderSummary';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahPesanan = () => {
    setTotalPesanan(prevTotal => prevTotal + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Kafe Kucing</Text>
      <OrderSummary totalCount={totalPesanan} />
      <ScrollView>
        {DAFTAR_MENU.map((item) => (
          <MenuItem 
            key={item.id} 
            nama={item.nama} 
            harga={item.harga} 
            onTambahPesanan={handleTambahPesanan} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fafafa', 
    paddingTop: 50 
},
  headerTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center' 
}
});