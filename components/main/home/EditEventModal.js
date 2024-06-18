import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Modal,
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { CustomPicker } from "./CustomPicker";

const EditEventModal = ({ isVisible, event, onClose, onSave, isNew }) => {
  const [title, setTitle] = useState(event?.title || "");
  const [start, setStart] = useState(
    event?.start ? event.start.toString().slice(0, 16) : ""
  );
  const [end, setEnd] = useState(
    event?.end ? event.end.toString().slice(0, 16) : ""
  );
  const [color, setColor] = useState(event?.color || "");
  const [summary, setSummary] = useState(event?.summary || "");

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setStart(event.start.toString().slice(0, 16));
      setEnd(event.end.toString().slice(0, 16));
      setColor(event.color);
      setSummary(event.summary);
    }
  }, [event]);

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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <Modal visible={isVisible} animationType="none" transparent={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />

            <Text style={styles.label}>Start Time</Text>
            <View
              className="flex-row"
              style={{ marginBottom: 16, paddingHorizontal: 8 }}
            >
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                onChange={onChange}
              />

              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            </View>

            <TextInput
              style={styles.input}
              value={start}
              onChangeText={setStart}
              placeholder="YYYY-MM-DD HH:MM"
            />

            <Text style={styles.label}>End Time</Text>
            <View
              className="flex-row"
              style={{ marginBottom: 16, paddingHorizontal: 8 }}
            >
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                onChange={onChange}
              />

              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            </View>

            <TextInput
              style={styles.input}
              value={end}
              onChangeText={setEnd}
              placeholder="YYYY-MM-DD HH:MM"
            />

            <Text style={styles.label}>Color</Text>
            <TextInput
              style={styles.input}
              value={color}
              onChangeText={setColor}
            />

            <Text style={styles.label}>Summary</Text>
            <TextInput
              style={styles.input}
              value={summary}
              onChangeText={setSummary}
            />

            <Button
              title="Save"
              onPress={handleSave}
              style={{ marginBottom: 20, width: 50 }}
            />
            <Button title="Cancel" onPress={onClose} style={{ width: 50 }} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContainer: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: "100%",
  },
  buttons: { marginBottom: 20, width: 50 },
});

export default EditEventModal;
