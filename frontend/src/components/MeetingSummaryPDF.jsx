import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#8B5CF6',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#6B7280',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 4,
  },
  text: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 1.5,
    marginBottom: 8,
  },
  bullet: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 1.5,
    marginBottom: 6,
    marginLeft: 15,
  },
  bulletPoint: {
    fontSize: 8,
    color: '#8B5CF6',
    marginRight: 8,
  },
  itemContainer: {
    backgroundColor: '#F9FAFB',
    padding: 10,
    marginBottom: 8,
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: '#8B5CF6',
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  itemText: {
    fontSize: 11,
    color: '#4B5563',
    lineHeight: 1.4,
  },
  participantText: {
    fontSize: 11,
    color: '#4B5563',
    backgroundColor: '#F3F4F6',
    padding: 8,
    borderRadius: 4,
  },
  nextStepContainer: {
    backgroundColor: '#FEF3C7',
    padding: 10,
    marginBottom: 8,
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
  },
  nextStepTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: 4,
  },
  nextStepText: {
    fontSize: 11,
    color: '#78350F',
    lineHeight: 1.4,
  },
});

const MeetingSummaryPDF = ({ meetingData }) => {
  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{meetingData.title || 'Meeting Summary'}</Text>
          <Text style={styles.date}>
            {meetingData.createdAt ? formatDate(meetingData.createdAt) : 'Date not available'}
          </Text>
        </View>

        {/* Summary Section */}
        {meetingData.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.text}>{meetingData.summary}</Text>
          </View>
        )}

        {/* Participants Section */}
        {meetingData.participants && meetingData.participants.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Participants</Text>
            <Text style={styles.participantText}>
              {meetingData.participants.join(', ')}
            </Text>
          </View>
        )}

        {/* Agenda Section */}
        {meetingData.agenda && meetingData.agenda.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Agenda</Text>
            {meetingData.agenda.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.text}>{index + 1}. {item}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Minutes Section */}
        {meetingData.minutes && meetingData.minutes.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Meeting Minutes</Text>
            {meetingData.minutes.map((minute, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{index + 1}. {minute.topic}</Text>
                <Text style={styles.itemText}>{minute.details}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Next Steps Section */}
        {meetingData.nextSteps && meetingData.nextSteps.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Next Steps</Text>
            {meetingData.nextSteps.map((step, index) => (
              <View key={index} style={styles.nextStepContainer}>
                <Text style={styles.nextStepTitle}>{index + 1}. {step.task}</Text>
                <Text style={styles.nextStepText}>
                  Assignee: {step.assignee}
                </Text>
                <Text style={styles.nextStepText}>
                  Due: {step.due ? new Date(step.due).toLocaleDateString() : 'Not specified'}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Key Points Section - If no detailed minutes available */}
        {(!meetingData.minutes || meetingData.minutes.length === 0) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Points</Text>
            {/* Create bullet points from available data */}
            {meetingData.summary && (
              <View style={styles.bullet}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.text}>{meetingData.summary}</Text>
              </View>
            )}
            {meetingData.nextSteps && meetingData.nextSteps.map((step, index) => (
              <View key={index} style={styles.bullet}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.text}>
                  {step.task} (Assignee: {step.assignee}
                  {step.due ? `, Due: ${new Date(step.due).toLocaleDateString()}` : ''})
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Footer */}
        <View style={{ position: 'absolute', bottom: 30, left: 30, right: 30 }}>
          <Text style={{ fontSize: 10, color: '#9CA3AF', textAlign: 'center' }}>
            Generated on {new Date().toLocaleDateString()} - Meeting Summary
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MeetingSummaryPDF;