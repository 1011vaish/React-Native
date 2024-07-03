import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

const App = () => {
  const [product, setProduct] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [netBill, setNetBill] = useState(0);
  const [payableAmount, setPayableAmount] = useState(0);

  const calculateBill = () => {
    const costValue = parseFloat(cost);
    const quantityValue = parseInt(quantity);
    if (isNaN(costValue) || isNaN(quantityValue) || quantityValue <= 0) {
      alert("Please enter valid cost and quantity");
      return;
    }

    const netBillValue = costValue * quantityValue;
    const discount = netBillValue * 0.1;
    const payableAmountValue = netBillValue - discount;

    setNetBill(netBillValue);
    setPayableAmount(payableAmountValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bill Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={product}
        onChangeText={setProduct}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Cost"
        value={cost}
        onChangeText={setCost}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Calculate Bill"
          onPress={calculateBill}
          color="#007BFF"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Net Bill:</Text>
        <Text style={styles.resultText}>$ {netBill.toFixed(2)}</Text>
        <Text style={styles.resultLabel}>Discount (10%):</Text>
        <Text style={styles.resultText}>$ {(netBill * 0.1).toFixed(2)}</Text>
        <Text style={styles.resultLabel}>Payable Amount:</Text>
        <Text style={[styles.resultText, styles.payableAmount]}>
          $ {payableAmount.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  resultContainer: {
    marginTop: 30,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#007BFF",
  },
  payableAmount: {
    color: "#28a745",
  },
});

export default App;
