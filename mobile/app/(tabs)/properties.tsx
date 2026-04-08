import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView, Linking, Image,
} from 'react-native';
import { Colors } from '../../constants/colors';

const PROPERTIES = [
  {
    id: '1', title: 'Modern 2BR in Dubai Marina',
    price: '18,000 AED/yr', type: 'Apartment', beds: 2, baths: 2, area: '140 m²',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
    neighborhood: 'Dubai Marina', status: 'rent', agent: '+971501234567',
  },
  {
    id: '2', title: 'Penthouse in Downtown Dubai',
    price: '12M AED', type: 'Penthouse', beds: 4, baths: 5, area: '520 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400',
    neighborhood: 'Downtown Dubai', status: 'sale', agent: '+971521112233',
  },
  {
    id: '3', title: 'Studio on Al Reem Island',
    price: '5,500 AED/yr', type: 'Studio', beds: 0, baths: 1, area: '52 m²',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    neighborhood: 'Al Reem Island', status: 'rent', agent: '+971504567890',
  },
  {
    id: '4', title: 'Villa in Jumeirah',
    price: '8M AED', type: 'Villa', beds: 5, baths: 6, area: '600 m²',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400',
    neighborhood: 'Jumeirah', status: 'sale', agent: '+971509876543',
  },
];

export default function PropertiesScreen() {
  const handleWhatsApp = (phone: string) => {
    const msg = encodeURIComponent("Hi, I'm interested in this property I found on Dari.");
    Linking.openURL(`https://wa.me/${phone.replace(/\D/g, '')}?text=${msg}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Properties 🔑</Text>
        <Text style={styles.headerSub}>Verified listings in Dubai</Text>
      </View>

      {/* Filter tabs */}
      <View style={styles.filterRow}>
        {['All', 'Rent', 'Buy', 'Villas', 'Apartments'].map((f) => (
          <TouchableOpacity key={f} style={[styles.filterBtn, f === 'All' && styles.filterBtnActive]}>
            <Text style={[styles.filterText, f === 'All' && styles.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {PROPERTIES.map((p) => (
          <View key={p.id} style={styles.card}>
            <Image source={{ uri: p.image }} style={styles.cardImage} />
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{p.status === 'rent' ? 'For Rent' : 'For Sale'}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.neighborhood}>{p.neighborhood}</Text>
              <Text style={styles.cardTitle}>{p.title}</Text>
              <Text style={styles.price}>{p.price}</Text>
              <View style={styles.specs}>
                {p.beds > 0 && <Text style={styles.spec}>🛏 {p.beds}</Text>}
                <Text style={styles.spec}>🚿 {p.baths}</Text>
                <Text style={styles.spec}>📐 {p.area}</Text>
                <Text style={styles.spec}>🏷 {p.type}</Text>
              </View>
              <TouchableOpacity
                style={styles.waBtn}
                onPress={() => handleWhatsApp(p.agent)}
              >
                <Text style={styles.waBtnText}>💬 WhatsApp Agent</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllText}>View all on dari.youooo.com →</Text>
        </TouchableOpacity>
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
  filterRow: {
    flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 12,
    gap: 8, backgroundColor: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.gray100,
  },
  filterBtn: {
    paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20,
    backgroundColor: Colors.gray100,
  },
  filterBtnActive: { backgroundColor: Colors.primary },
  filterText: { fontSize: 13, color: Colors.gray700, fontWeight: '500' },
  filterTextActive: { color: Colors.white, fontWeight: '700' },
  content: { padding: 16 },
  card: {
    backgroundColor: Colors.white, borderRadius: 16, marginBottom: 16, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 3,
  },
  cardImage: { width: '100%', height: 180 },
  statusBadge: {
    position: 'absolute', top: 12, left: 12,
    backgroundColor: Colors.primary, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20,
  },
  statusText: { color: Colors.white, fontSize: 11, fontWeight: '700' },
  cardBody: { padding: 16 },
  neighborhood: { fontSize: 12, color: Colors.gray500, marginBottom: 4 },
  cardTitle: { fontSize: 17, fontWeight: '700', color: Colors.secondary, marginBottom: 6 },
  price: { fontSize: 18, fontWeight: '700', color: Colors.primary, marginBottom: 10 },
  specs: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 14 },
  spec: { fontSize: 13, color: Colors.gray700 },
  waBtn: {
    backgroundColor: '#25D366', paddingVertical: 12,
    borderRadius: 10, alignItems: 'center',
  },
  waBtnText: { color: Colors.white, fontWeight: '700', fontSize: 15 },
  viewAllBtn: {
    alignItems: 'center', padding: 16, backgroundColor: Colors.white,
    borderRadius: 12, borderWidth: 1.5, borderColor: Colors.primary,
  },
  viewAllText: { color: Colors.primary, fontWeight: '600', fontSize: 15 },
});
