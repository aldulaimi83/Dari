import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView, Linking, Alert,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { SERVICES } from '../../constants/services';

export default function ServicesScreen() {
  const handleWhatsApp = (phone: string, serviceName: string) => {
    const msg = encodeURIComponent(`Hi, I found you through Dari app. I'm interested in your ${serviceName} service.`);
    const url = `https://wa.me/${phone.replace(/\D/g, '')}?text=${msg}`;
    Linking.openURL(url).catch(() =>
      Alert.alert('WhatsApp not installed', 'Please install WhatsApp to contact providers.')
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services ⚡</Text>
        <Text style={styles.headerSub}>Everything you need to settle in Dubai</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {SERVICES.map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            {/* Service Header */}
            <View style={[styles.serviceHeader, { backgroundColor: service.color + '15' }]}>
              <View style={[styles.iconCircle, { backgroundColor: service.color + '20' }]}>
                <Text style={styles.serviceIcon}>{service.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceTitleAr}>{service.titleAr}</Text>
                <Text style={styles.serviceDesc}>{service.description}</Text>
              </View>
            </View>

            {/* Providers */}
            <View style={styles.providers}>
              {service.providers.map((p, i) => (
                <View key={i} style={styles.providerRow}>
                  <Text style={styles.providerLogo}>{p.logo}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.providerName}>{p.name}</Text>
                    <View style={styles.providerMeta}>
                      <Text style={styles.providerRating}>⭐ {p.rating}</Text>
                      <View style={[styles.tag, { backgroundColor: service.color + '15' }]}>
                        <Text style={[styles.tagText, { color: service.color }]}>{p.tag}</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={[styles.waBtn, { backgroundColor: '#25D366' }]}
                    onPress={() => handleWhatsApp(p.whatsapp, service.title)}
                  >
                    <Text style={styles.waBtnText}>WhatsApp</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.gray50 },
  header: {
    backgroundColor: Colors.primary, paddingHorizontal: 20,
    paddingTop: 20, paddingBottom: 20,
  },
  headerTitle: { fontSize: 24, fontWeight: '700', color: Colors.white },
  headerSub: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  content: { padding: 16 },
  serviceCard: {
    backgroundColor: Colors.white, borderRadius: 16, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 3, overflow: 'hidden',
  },
  serviceHeader: { flexDirection: 'row', gap: 14, padding: 16, alignItems: 'flex-start' },
  iconCircle: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  serviceIcon: { fontSize: 24 },
  serviceTitle: { fontSize: 16, fontWeight: '700', color: Colors.secondary },
  serviceTitleAr: { fontSize: 13, color: Colors.gray500, marginBottom: 4 },
  serviceDesc: { fontSize: 13, color: Colors.gray500, lineHeight: 18 },
  providers: { borderTopWidth: 1, borderTopColor: Colors.gray100 },
  providerRow: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 16, paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: Colors.gray100,
  },
  providerLogo: { fontSize: 24 },
  providerName: { fontSize: 14, fontWeight: '600', color: Colors.secondary },
  providerMeta: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 2 },
  providerRating: { fontSize: 12, color: Colors.gray500 },
  tag: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  tagText: { fontSize: 11, fontWeight: '600' },
  waBtn: {
    paddingHorizontal: 12, paddingVertical: 8,
    borderRadius: 10, alignItems: 'center',
  },
  waBtnText: { color: Colors.white, fontSize: 12, fontWeight: '700' },
});
