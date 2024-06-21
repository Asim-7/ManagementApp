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
import ColorSelection from "./ColorSelection";

// Links:
// https://github.com/react-native-datetimepicker/datetimepicker
// https://docs.expo.dev/versions/latest/sdk/date-time-picker/

const EditEventModal = ({ isVisible, event, onClose, onSave, isNew }) => {
  const [title, setTitle] = useState(event?.title || "");
  const [color, setColor] = useState(event?.color || "");
  const [summary, setSummary] = useState(event?.summary || "");

  const [startDate, setStartDate] = useState(new Date(event.start));
  const [endDate, setEndDate] = useState(new Date(event.end));

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setStartDate(new Date(event.start));
      setEndDate(new Date(event.end));
      setColor(event.color);
      setSummary(event.summary);
    }
  }, [event]);

  const handleSave = () => {
    onSave({
      ...event,
      title,
      start: startDate,
      end: endDate,
      color,
      summary,
    });
    onClose();
  };

  const onStartDateChange = (event, selectedDate) => {
    setStartDate(selectedDate);

    if (!hasAtLeastTenMinutesDifference(selectedDate, endDate)) {
      const newEndDate = new Date(selectedDate.getTime() + 60 * 60000); // Adding 1 hour
      setEndDate(newEndDate);
    }
  };

  const onEndDateChange = (event, selectedDate) => {
    setEndDate(selectedDate);
  };

  function hasAtLeastTenMinutesDifference(date1, date2) {
    const tenMinutesInMilliseconds = 10 * 60 * 1000; // 10 minutes in milliseconds
    const differenceInMilliseconds = Math.abs(date1 - date2);
    return differenceInMilliseconds >= tenMinutesInMilliseconds;
  }

  const handleColorChange = (newColor) => {
    setColor(newColor);
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
                value={startDate}
                mode={"date"}
                is24Hour={true}
                onChange={onStartDateChange}
              />

              <DateTimePicker
                testID="dateTimePicker"
                value={startDate}
                mode={"time"}
                is24Hour={true}
                onChange={onStartDateChange}
              />
            </View>

            <Text style={styles.label}>End Time</Text>
            <View
              className="flex-row"
              style={{ marginBottom: 16, paddingHorizontal: 8 }}
            >
              <DateTimePicker
                minimumDate={endDate}
                testID="dateTimePicker"
                value={endDate}
                mode={"date"}
                is24Hour={true}
                onChange={onEndDateChange}
              />

              <DateTimePicker
                minimumDate={endDate}
                testID="dateTimePicker"
                value={endDate}
                mode={"time"}
                is24Hour={true}
                onChange={onEndDateChange}
              />
            </View>

            <Text style={styles.label}>Color</Text>
            <TextInput
              style={styles.input}
              value={color}
              onChangeText={setColor}
            />

            <ColorSelection eventColor={color} onClick={handleColorChange} />

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
