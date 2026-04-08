import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../../constants/colors';

const MENU_ITEMS = [
  { icon: '🏠', label: 'My Saved Properties', arrow: true },
  { icon: '📋', label: 'My Applications', arrow: true },
  { icon: '🔔', label: 'Notifications', arrow: true },
  { icon: '🌍', label: 'Language / اللغة', arrow: true },
  { icon: '❓', label: 'Help & Support', arrow: true },
  { icon: '⭐', label: 'Rate Dari App', arrow: true },
  { icon: '📤', label: 'Share with a Friend', arrow: true },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <Text style={styles.name}>Ahmed</Text>
          <Text style={styles.city}>🇦🇪 Moving to Dubai</Text>
          <View style={styles.statRow}>
            <View style={styles.stat}>
              <Text style={styles.statNum}>0</Text>
              <Text style={styles.statLabel}>Steps Done</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statNum}>8</Text>
              <Text style={styles.statLabel}>Total Steps</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statNum}>0%</Text>
              <Text style={styles.statLabel}>Complete</Text>
            </View>
          </View>
        </View>

        {/* Referral Banner */}
        <View style={styles.referralBanner}>
          <Text style={styles.referralTitle}>💸 Refer a Friend</Text>
          <Text style={styles.referralText}>
            Share Dari with expats moving to Dubai — earn 200 AED for every signup that books a service.
          </Text>
          <TouchableOpacity style={styles.referralBtn}>
            <Text style={styles.referralBtnText}>Share My Link</Text>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <View style={styles.menuSection}>
          {MENU_ITEMS.map((item, i) => (
            <TouchableOpacity key={i} style={styles.menuItem}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Reset */}
        <TouchableOpacity style={styles.resetBtn} onPress={() => router.replace('/onboarding')}>
          <Text style={styles.resetText}>Start Over / Reset</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Dari v1.0 · dari.youooo.com</Text>
        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.gray50 },
  header: {
    backgroundColor: Colors.primary, alignItems: 'center',
    paddingTop: 30, paddingBottom: 30, paddingHorizontal: 20,
  },
  avatar: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.3)', alignItems: 'center',
    justifyContent: 'center', marginBottom: 12,
  },
  avatarText: { fontSize: 32, fontWeight: '700', color: Colors.white },
  name: { fontSize: 22, fontWeight: '700', color: Colors.white, marginBottom: 4 },
  city: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 20 },
  statRow: {
    flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 14, padding: 16, gap: 0,
  },
  stat: { flex: 1, alignItems: 'center' },
  statNum: { fontSize: 20, fontWeight: '700', color: Colors.white },
  statLabel: { fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  statDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.3)' },
  referralBanner: {
    margin: 16, backgroundColor: Colors.primaryLight,
    borderRadius: 16, padding: 18, borderWidth: 1.5, borderColor: Colors.primary + '40',
  },
  referralTitle: { fontSize: 16, fontWeight: '700', color: Colors.primaryDark, marginBottom: 6 },
  referralText: { fontSize: 13, color: Colors.gray700, lineHeight: 18, marginBottom: 12 },
  referralBtn: {
    backgroundColor: Colors.primary, paddingVertical: 10,
    borderRadius: 10, alignItems: 'center',
  },
  referralBtnText: { color: Colors.white, fontWeight: '700', fontSize: 14 },
  menuSection: {
    marginHorizontal: 16, backgroundColor: Colors.white,
    borderRadius: 16, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  menuItem: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16,
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: Colors.gray100,
  },
  menuIcon: { fontSize: 20, marginRight: 12 },
  menuLabel: { flex: 1, fontSize: 15, color: Colors.secondary },
  menuArrow: { fontSize: 20, color: Colors.gray300 },
  resetBtn: {
    margin: 16, padding: 14, borderRadius: 12,
    borderWidth: 1.5, borderColor: Colors.gray300, alignItems: 'center',
  },
  resetText: { color: Colors.gray500, fontSize: 14, fontWeight: '600' },
  version: { textAlign: 'center', color: Colors.gray300, fontSize: 12, marginBottom: 8 },
});
