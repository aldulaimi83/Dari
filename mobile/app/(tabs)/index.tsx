import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../../constants/colors';
import { SERVICES } from '../../constants/services';

const CHECKLIST = [
  { id: 'apartment', label: 'Find Apartment', done: false },
  { id: 'bank', label: 'Open Bank Account', done: false },
  { id: 'sim', label: 'Get SIM Card', done: false },
  { id: 'car', label: 'Get a Car', done: false },
  { id: 'insurance', label: 'Health Insurance', done: false },
  { id: 'visa', label: 'Visa & PRO Help', done: false },
];

export default function HomeScreen() {
  const done = CHECKLIST.filter((i) => i.done).length;
  const progress = done / CHECKLIST.length;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>مرحباً، Ahmed 👋</Text>
            <Text style={styles.subGreeting}>Your Dubai setup guide</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🇦🇪 Dubai</Text>
          </View>
        </View>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Your Setup Progress</Text>
            <Text style={styles.progressPct}>{Math.round(progress * 100)}%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
          </View>
          <Text style={styles.progressSub}>{done} of {CHECKLIST.length} steps complete</Text>
        </View>

        {/* Checklist */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Checklist</Text>
          {CHECKLIST.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.checkItem}
              onPress={() => router.push('/(tabs)/services')}
            >
              <View style={[styles.checkbox, item.done && styles.checkboxDone]}>
                {item.done && <Text style={styles.checkMark}>✓</Text>}
              </View>
              <Text style={[styles.checkLabel, item.done && styles.checkLabelDone]}>
                {SERVICES.find((s) => s.id === item.id)?.icon} {item.label}
              </Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dubai Tips 🇦🇪</Text>
          {[
            { tip: 'Health insurance is mandatory in Dubai — get it before your visa.', icon: '🏥' },
            { tip: 'Open a bank account early — it takes 3-5 working days to activate.', icon: '🏦' },
            { tip: 'Rent is usually paid upfront by cheque for 1-4 months.', icon: '🏠' },
            { tip: 'Driving licence from many countries can be converted directly.', icon: '🚗' },
          ].map((t, i) => (
            <View key={i} style={styles.tipCard}>
              <Text style={styles.tipIcon}>{t.icon}</Text>
              <Text style={styles.tipText}>{t.tip}</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.gray50 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingTop: 20, paddingBottom: 16,
    backgroundColor: Colors.primary,
  },
  greeting: { fontSize: 22, fontWeight: '700', color: Colors.white },
  subGreeting: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12,
    paddingVertical: 6, borderRadius: 20,
  },
  badgeText: { color: Colors.white, fontWeight: '600', fontSize: 13 },
  progressCard: {
    margin: 16, backgroundColor: Colors.white, borderRadius: 16,
    padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 3,
  },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  progressTitle: { fontSize: 16, fontWeight: '600', color: Colors.secondary },
  progressPct: { fontSize: 16, fontWeight: '700', color: Colors.primary },
  progressTrack: { height: 8, backgroundColor: Colors.gray100, borderRadius: 4, marginBottom: 8 },
  progressFill: { height: 8, backgroundColor: Colors.primary, borderRadius: 4 },
  progressSub: { fontSize: 13, color: Colors.gray500 },
  section: { paddingHorizontal: 16, marginBottom: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: Colors.secondary, marginBottom: 12, marginTop: 8 },
  checkItem: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white,
    borderRadius: 12, padding: 14, marginBottom: 8,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  checkbox: {
    width: 22, height: 22, borderRadius: 6, borderWidth: 2,
    borderColor: Colors.gray300, marginRight: 12, alignItems: 'center', justifyContent: 'center',
  },
  checkboxDone: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  checkMark: { color: Colors.white, fontSize: 13, fontWeight: '700' },
  checkLabel: { flex: 1, fontSize: 15, color: Colors.secondary },
  checkLabelDone: { color: Colors.gray500, textDecorationLine: 'line-through' },
  arrow: { fontSize: 20, color: Colors.gray300 },
  tipCard: {
    flexDirection: 'row', alignItems: 'flex-start', backgroundColor: Colors.white,
    borderRadius: 12, padding: 14, marginBottom: 8, gap: 10,
  },
  tipIcon: { fontSize: 20 },
  tipText: { flex: 1, fontSize: 14, color: Colors.gray700, lineHeight: 20 },
});
