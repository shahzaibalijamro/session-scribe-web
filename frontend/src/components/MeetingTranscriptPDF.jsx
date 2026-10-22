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
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
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
  participantText: {
    fontSize: 11,
    color: '#4B5563',
    backgroundColor: '#F3F4F6',
    padding: 8,
    borderRadius: 4,
    marginBottom: 15,
  },
  transcriptContainer: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: '#8B5CF6',
  },
  speakerName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  speakerText: {
    fontSize: 11,
    color: '#374151',
    lineHeight: 1.5,
  },
  metaInfo: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
  },
  footerText: {
    fontSize: 10,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});

const TranscriptPDF = ({ meetingData }) => {
  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format duration helper
  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get category from type
  const getCategory = (category) => {
    if (category === "live-transcription") return "Live Transcription";
    if (category === "audio-notes") return "Audio Notes";
    return "Meeting Recording";
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{meetingData.title || 'Meeting Transcript'}</Text>
          <Text style={styles.subtitle}>{getCategory(meetingData.type)}</Text>
          <Text style={styles.date}>
            {meetingData.createdAt ? formatDate(meetingData.createdAt) : 'Date not available'}
          </Text>
        </View>

        {/* Meeting Info */}
        <View style={styles.metaInfo}>
          <Text>Duration: {meetingData.recordingLength ? formatDuration(meetingData.recordingLength) : 'Not available'}</Text>
          {meetingData.transcript && meetingData.transcript.length > 0 && (
            <Text>Total Messages: {meetingData.transcript.length}</Text>
          )}
        </View>

        {/* Participants Section */}
        {meetingData.participants && meetingData.participants.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Participants</Text>
            <Text style={styles.participantText}>
              {meetingData.participants.join(', ')}
            </Text>
          </View>
        )}

        {/* Transcript Section */}
        {meetingData.transcript && meetingData.transcript.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Full Transcript</Text>
            {meetingData.transcript.map((entry, index) => (
              <View key={index} style={styles.transcriptContainer}>
                <Text style={styles.speakerName}>{entry.speaker}</Text>
                <Text style={styles.speakerText}>{entry.text}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Full Transcript</Text>
            <Text style={styles.speakerText}>No transcript available for this meeting.</Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Generated on {new Date().toLocaleDateString()} - Meeting Transcript
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default TranscriptPDF;