import { StyleSheet, Text, View } from 'react-native';

// Menggunakan object destructuring untuk menerima props 'totalCount'
const OrderSummary = ({ totalCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Item Dipesan: {totalCount}</Text>
      
      {totalCount >= 5 && (
        <Text style={styles.promo}>Selamat! Anda Mendapatkan Diskon 10%</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ 
    padding: 15, 
    backgroundColor: '#f0f8ff', 
    marginBottom: 15, 
    borderRadius: 8 
},
  text:{ 
    fontSize: 18,
    fontWeight: 'bold' 
},
  promo:{ 
    fontSize: 16,
    color: 'green',
    marginTop: 5,
    fontWeight: 'bold' 
}
});

export default OrderSummary;