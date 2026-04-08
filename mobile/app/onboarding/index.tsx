import { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, TextInput, SafeAreaView, Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../../constants/colors';

const { width } = Dimensions.get('window');

const STEPS = [
  {
    id: 'welcome',
    title: 'Welcome to Dari',
    subtitle: 'داري',
    description: 'Your complete guide to settling in Dubai. We handle everything so you can focus on what matters.',
  },
  {
    id: 'city',
    title: "Where are you moving?",
    subtitle: 'اختر مدينتك',
    description: 'We\'ll personalize your experience',
  },
  {
    id: 'when',
    title: 'When are you arriving?',
    subtitle: 'متى تصل؟',
    description: 'We\'ll help you prepare in time',
  },
  {
    id: 'family',
    title: 'Who\'s moving with you?',
    subtitle: 'من يسافر معك؟',
    description: 'We\'ll show the right services',
  },
];

const CITIES = ['Dubai', 'Abu Dhabi', 'Riyadh', 'Jeddah', 'Khobar'];
const TIMELINES = ['Already here', 'Within 1 month', '1–3 months', '3–6 months', 'Just exploring'];
const FAMILY_SIZES = ['Just me', 'Me + Partner', 'Me + Partner + Kids', 'Me + Kids'];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [city, setCity] = useState('Dubai');
  const [timeline, setTimeline] = useState('');
  const [family, setFamily] = useState('');
  const [name, setName] = useState('');

  const isLast = step === STEPS.length - 1;

  const handleNext = () => {
    if (isLast) {
      router.replace('/(tabs)');
    } else {
      setStep(step + 1);
    }
  };

  const canNext = () => {
    if (step === 0) return name.length > 0;
    if (step === 1) return city.length > 0;
    if (step === 2) return timeline.length > 0;
    if (step === 3) return family.length > 0;
    return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.progressBar}>
          {STEPS.map((_, i) => (
            <View
              key={i}
              style={[styles.progressDot, i <= step && styles.progressDotActive]}
            />
          ))}
        </View>
        {step > 0 && (
          <TouchableOpacity onPress={() => setStep(step - 1)}>
            <Text style={styles.backBtn}>← Back</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Step 0 — Welcome */}
        {step === 0 && (
          <View>
            <Text style={styles.emoji}>🌟</Text>
            <Text style={styles.title}>{STEPS[0].title}</Text>
            <Text style={styles.subtitle}>{STEPS[0].subtitle}</Text>
            <Text style={styles.description}>{STEPS[0].description}</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Your first name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Ahmed"
                value={name}
                onChangeText={setName}
                placeholderTextColor={Colors.gray300}
              />
            </View>
          </View>
        )}

        {/* Step 1 — City */}
        {step === 1 && (
          <View>
            <Text style={styles.emoji}>🌍</Text>
            <Text style={styles.title}>{STEPS[1].title}</Text>
            <Text style={styles.subtitle}>{STEPS[1].subtitle}</Text>
            <View style={styles.optionsGrid}>
              {CITIES.map((c) => (
                <TouchableOpacity
                  key={c}
                  style={[styles.optionCard, city === c && styles.optionCardSelected]}
                  onPress={() => setCity(c)}
                >
                  <Text style={[styles.optionText, city === c && styles.optionTextSelected]}>{c}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Step 2 — Timeline */}
        {step === 2 && (
          <View>
            <Text style={styles.emoji}>📅</Text>
            <Text style={styles.title}>{STEPS[2].title}</Text>
            <Text style={styles.subtitle}>{STEPS[2].subtitle}</Text>
            <View style={styles.optionsList}>
              {TIMELINES.map((t) => (
                <TouchableOpacity
                  key={t}
                  style={[styles.listOption, timeline === t && styles.listOptionSelected]}
                  onPress={() => setTimeline(t)}
                >
                  <Text style={[styles.listOptionText, timeline === t && styles.listOptionTextSelected]}>{t}</Text>
                  {timeline === t && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Step 3 — Family */}
        {step === 3 && (
          <View>
            <Text style={styles.emoji}>👨‍👩‍👧‍👦</Text>
            <Text style={styles.title}>{STEPS[3].title}</Text>
            <Text style={styles.subtitle}>{STEPS[3].subtitle}</Text>
            <View style={styles.optionsList}>
              {FAMILY_SIZES.map((f) => (
                <TouchableOpacity
                  key={f}
                  style={[styles.listOption, family === f && styles.listOptionSelected]}
                  onPress={() => setFamily(f)}
                >
                  <Text style={[styles.listOptionText, family === f && styles.listOptionTextSelected]}>{f}</Text>
                  {family === f && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      {/* CTA Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !canNext() && styles.btnDisabled]}
          onPress={handleNext}
          disabled={!canNext()}
        >
          <Text style={styles.btnText}>
            {step === 0 ? `Let's go, ${name || '...'} 🚀` : isLast ? "Take me to Dubai! 🇦🇪" : 'Continue →'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  header: { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 },
  progressBar: { flexDirection: 'row', gap: 6, marginBottom: 12 },
  progressDot: { flex: 1, height: 4, borderRadius: 2, backgroundColor: Colors.gray100 },
  progressDotActive: { backgroundColor: Colors.primary },
  backBtn: { color: Colors.gray500, fontSize: 15 },
  content: { paddingHorizontal: 24, paddingBottom: 40 },
  emoji: { fontSize: 52, marginBottom: 16, marginTop: 24 },
  title: { fontSize: 28, fontWeight: '700', color: Colors.secondary, marginBottom: 6 },
  subtitle: { fontSize: 18, color: Colors.primary, marginBottom: 12, fontWeight: '500' },
  description: { fontSize: 16, color: Colors.gray500, lineHeight: 24, marginBottom: 32 },
  inputGroup: { marginTop: 8 },
  label: { fontSize: 14, color: Colors.gray700, fontWeight: '600', marginBottom: 8 },
  input: {
    borderWidth: 1.5, borderColor: Colors.gray300, borderRadius: 12,
    paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, color: Colors.secondary,
  },
  optionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 8 },
  optionCard: {
    paddingHorizontal: 20, paddingVertical: 12, borderRadius: 12,
    borderWidth: 1.5, borderColor: Colors.gray300, backgroundColor: Colors.white,
  },
  optionCardSelected: { borderColor: Colors.primary, backgroundColor: Colors.primaryLight },
  optionText: { fontSize: 15, color: Colors.gray700, fontWeight: '500' },
  optionTextSelected: { color: Colors.primaryDark, fontWeight: '700' },
  optionsList: { gap: 10, marginTop: 8 },
  listOption: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 16, borderRadius: 12, borderWidth: 1.5, borderColor: Colors.gray300,
  },
  listOptionSelected: { borderColor: Colors.primary, backgroundColor: Colors.primaryLight },
  listOptionText: { fontSize: 16, color: Colors.gray700 },
  listOptionTextSelected: { color: Colors.primaryDark, fontWeight: '600' },
  checkmark: { color: Colors.primary, fontSize: 18, fontWeight: '700' },
  footer: { padding: 24, paddingBottom: 36 },
  btn: {
    backgroundColor: Colors.primary, paddingVertical: 16,
    borderRadius: 14, alignItems: 'center',
  },
  btnDisabled: { backgroundColor: Colors.gray300 },
  btnText: { color: Colors.white, fontSize: 17, fontWeight: '700' },
});
