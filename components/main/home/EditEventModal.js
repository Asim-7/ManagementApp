import React, { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet, Text } from "react-native";

const EditEventModal = ({ isVisible, event, onClose, onSave }) => {
  const [title, setTitle] = useState(event.title);
  const [start, setStart] = useState(event.start.toString().slice(0, 16));
  const [end, setEnd] = useState(event.end.toString().slice(0, 16));
  const [color, setColor] = useState(event.color);
  const [summary, setSummary] = useState(event.summary);

  const handleSave = () => {
    onSave({
      ...event,
      title,
      start: new Date(start),
      end: new Date(end),
      color,
      summary,
    });
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />

        <Text style={styles.label}>Start Time</Text>
        <TextInput
          style={styles.input}
          value={start}
          onChangeText={setStart}
          placeholder="YYYY-MM-DD HH:MM"
        />

        <Text style={styles.label}>End Time</Text>
        <TextInput
          style={styles.input}
          value={end}
          onChangeText={setEnd}
          placeholder="YYYY-MM-DD HH:MM"
        />

        <Text style={styles.label}>Color</Text>
        <TextInput style={styles.input} value={color} onChangeText={setColor} />

        <Text style={styles.label}>Summary</Text>
        <TextInput
          style={styles.input}
          value={summary}
          onChangeText={setSummary}
        />

        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default EditEventModal;
