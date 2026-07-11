// Clinical Summary Translations for ECG Analyzer
// This file contains all clinical summary text translated to multiple languages

export const clinicalSummaries = {
    en: {
        Normal: `═════════════════════════════════════════════════════════════

NORMAL SINUS RHYTHM - HEALTHY ECG

═════════════════════════════════════════════════════════════

CLINICAL FINDINGS:

• Heart Rate: Regular and within normal range (60-100 BPM)

• P-Waves: Present, upright, and uniform

• PR Interval: Normal duration (120-200ms)

• QRS Complex: Normal duration (<120ms)

• ST Segment: At isoelectric line

• T-Waves: Upright and symmetric

• Rhythm: No arrhythmias detected

═════════════════════════════════════════════════════════════

ASSESSMENT:

• Your heart's electrical activity is normal and healthy.

• All intervals and segments are within normal ranges.

• Continue regular cardiovascular health maintenance.

• Routine ECG screening recommended as per guidelines.

═════════════════════════════════════════════════════════════`,

        Myocardial_Infarction: `═════════════════════════════════════════════════════════════

ACUTE MYOCARDIAL INFARCTION DETECTED

═════════════════════════════════════════════════════════════

⚠️  [CRITICAL - REQUIRES IMMEDIATE EMERGENCY CARE]

CLINICAL FINDINGS:

• ST-Segment Elevation (≥1mm) in contiguous leads

• Pathological Q waves indicating transmural infarction

• T-Wave Inversion in affected territories

• Reciprocal ST Depression in opposite leads

• Possible QRS widening from conduction delays

═════════════════════════════════════════════════════════════

ASSESSMENT:

• Evidence of acute myocardial ischemia/infarction detected.

• This is a TIME-CRITICAL condition requiring immediate intervention.

• This ECG finding is consistent with STEMI (ST-Elevation Myocardial Infarction).

• Prognosis depends on time to intervention and extent of myocardial damage.

═════════════════════════════════════════════════════════════

IMMEDIATE ACTIONS REQUIRED:

1. CALL EMERGENCY SERVICES (911) IMMEDIATELY

2. Chew aspirin (325mg) if not allergic

3. Rest and avoid exertion

4. Transport to nearest PCI-capable facility

5. Time of symptom onset is critical for treatment

═════════════════════════════════════════════════════════════`,

        Abnormal_Heartbeat: `═════════════════════════════════════════════════════════════

CARDIAC ARRHYTHMIA DETECTED

═════════════════════════════════════════════════════════════

⚠️  [REQUIRES CARDIOLOGY EVALUATION]

CLINICAL FINDINGS:

• Irregular heart rhythm present

• Abnormal rate patterns or ectopic beats

• Deviation from normal sinus rhythm

• Abnormal P-wave morphology noted

• Conduction pattern abnormalities

═════════════════════════════════════════════════════════════

POSSIBLE DIAGNOSES:

• Premature Atrial Contractions (PACs)

• Premature Ventricular Contractions (PVCs)

• Atrial Fibrillation

• Supraventricular Tachycardia (SVT)

• Other conduction abnormalities

═════════════════════════════════════════════════════════════

ASSESSMENT:

• Hemodynamic effects depend on rate and frequency of episodes.

• Symptom severity may range from asymptomatic to symptomatic.

• Treatment may include antiarrhythmic therapy or ablation procedure.

═════════════════════════════════════════════════════════════

RECOMMENDED ACTIONS:

1. Schedule urgent cardiology consultation

2. Start continuous monitoring (Holter monitor or event recorder)

3. Avoid triggers (caffeine, stress)

4. Report palpitations or syncope

5. Consider EP study if indicated

═════════════════════════════════════════════════════════════`,

        MI_history: `═════════════════════════════════════════════════════════════

HISTORY OF MYOCARDIAL INFARCTION

═════════════════════════════════════════════════════════════

⚠️  [REQUIRES ONGOING CARDIOLOGY MANAGEMENT]

CLINICAL FINDINGS:

• Pathological Q waves in previous infarction territory

• Persistent ST-T wave abnormalities

• Evidence of myocardial scar tissue

• Possible left ventricular remodeling

• Risk profile for recurrent events

═════════════════════════════════════════════════════════════

ASSESSMENT:

• Healed or chronic post-myocardial infarction pattern detected.

• Pattern is consistent with old infarction with scar tissue formation.

• Serial ECGs and monitoring are essential for long-term management.

═════════════════════════════════════════════════════════════

RISK FACTORS:

• You are at increased risk for recurrent myocardial infarction.

• Heart failure development is a concern.

• Ventricular arrhythmias may occur.

• Risk of sudden cardiac death exists.

═════════════════════════════════════════════════════════════

RECOMMENDED MANAGEMENT:

1. Continue cardiology follow-up (every 3-6 months)

2. Maintain evidence-based medications:
   - Antiplatelet therapy (Aspirin +/- P2Y12 inhibitor)
   - Beta-blocker for rate control
   - ACE inhibitor or ARB for remodeling
   - Statin for lipid management

3. Cardiac rehabilitation program

4. Lifestyle modifications (diet, exercise, stress management)

5. Risk factor management (BP, diabetes, cholesterol)

6. Regular functional assessment

═════════════════════════════════════════════════════════════`,
    },

    hi: {
        Normal: `═════════════════════════════════════════════════════════════

सामान्य साइनस लय - स्वस्थ ईसीजी

═════════════════════════════════════════════════════════════

नैदानिक निष्कर्ष:

• हृदय गति: नियमित और सामान्य सीमा (60-100 BPM) के भीतर

• पी-तरंगें: मौजूद, सीधी और समान

• PR अंतराल: सामान्य अवधि (120-200ms)

• QRS परिसर: सामान्य अवधि (<120ms)

• ST खंड: आइसोइलेक्ट्रिक रेखा पर

• टी-तरंगें: सीधी और सममित

• लय: कोई अतालता का पता नहीं चला

═════════════════════════════════════════════════════════════

आकलन:

• आपकी हृदय की विद्युत गतिविधि सामान्य और स्वस्थ है।

• सभी अंतराल और खंड सामान्य श्रेणियों में हैं।

• नियमित हृदय-संवहनी स्वास्थ्य रखरखाव जारी रखें।

• दिशानिर्देशों के अनुसार नियमित ईसीजी जांच की सिफारिश की जाती है।

═════════════════════════════════════════════════════════════`,

        Myocardial_Infarction: `═════════════════════════════════════════════════════════════

तीव्र मायोकार्डियल इंफार्क्शन का पता चला

═════════════════════════════════════════════════════════════

⚠️  [गंभीर - तत्काल आपातकालीन देखभाल की आवश्यकता है]

नैदानिक निष्कर्ष:

• एसटी-खंड ऊंचाई (≥1mm) सन्निहित लीड में

• रोधगलन इंफार्क्शन का सूचक रोगसूचक Q तरंगें

• प्रभावित क्षेत्रों में T-तरंग व्युत्क्रम

• विपरीत लीड में प्रतिगामी एसटी डिप्रेशन

• चालन देरी से संभावित QRS चौड़ाई

═════════════════════════════════════════════════════════════

आकलन:

• तीव्र मायोकार्डियल इस्केमिया/इंফार्क्शन का प्रमाण पाया गया।

• यह एक समय-गंभीर स्थिति है जिसके लिए तत्काल हस्तक्षेप की आवश्यकता है।

• यह ईसीजी निष्कर्ष STEMI (ST-ऊंचाई मायोकार्डियल इंफार्क्शन) के अनुरूप है।

• रोग का निदान हस्तक्षेप के समय और मायोकार्डियल क्षति की सीमा पर निर्भर करता है।

═════════════════════════════════════════════════════════════

तत्काल कार्रवाई आवश्यक:

1. तत्काल आपातकालीन सेवाएं बुलाएँ (911)

2. एस्पिरिन (325mg) चबाएं यदि एलर्जी नहीं है

3. आराम करें और परिश्रम से बचें

4. निकटतम पीसीआई सक्षम सुविधा में ले जाएं

5. लक्षण की शुरुआत का समय उपचार के लिए महत्वपूर्ण है

═════════════════════════════════════════════════════════════`,

        Abnormal_Heartbeat: `═════════════════════════════════════════════════════════════

हृदय अतालता का पता चला

═════════════════════════════════════════════════════════════

⚠️  [कार्डियोलॉजी मूल्यांकन की आवश्यकता है]

नैदानिक निष्कर्ष:

• अनियमित हृदय गति मौजूद है

• असामान्य दर पैटर्न या एक्टोपिक स्पंदन

• सामान्य साइनस लय से विचलन

• असामान्य पी-तरंग आकृतिविज्ञान नोट किया गया

• चालन पैटर्न असामान्यताएं

═════════════════════════════════════════════════════════════

संभावित निदान:

• समय से पहले आलिंद्कुंचन (PACs)

• समय से पहले निलयी कुंचन (PVCs)

• आलिंद्कंपन

• सुप्रावेंट्रिकुलर टेकिकार्डिया (SVT)

• अन्य चालन असामान्यताएं

═════════════════════════════════════════════════════════════

आकलन:

• हेमोडायनामिक प्रभाव एपिसोड की दर और आवृत्ति पर निर्भर करता है।

• लक्षण की गंभीरता स्पर्शोन्मुख से लक्षणपूर्ण तक हो सकती है।

• उपचार में एंटीअथेरिथमिक थेरेपी या जलन प्रक्रिया शामिल हो सकती है।

═════════════════════════════════════════════════════════════

अनुशंसित कार्रवाई:

1. तत्काल कार्डियोलॉजी परामर्श शेड्यूल करें

2. निरंतर निगरानी शुरू करें (होल्टर मॉनिटर या ईवेंट रिकॉर्डर)

3. ट्रिगर से बचें (कैफीन, तनाव)

4. पल्पिटेशन या सिंकोप की रिपोर्ट करें

5. यदि संकेत दिया जाए तो ईपी अध्ययन पर विचार करें

═════════════════════════════════════════════════════════════`,

        MI_history: `═════════════════════════════════════════════════════════════

मायोकार्डियल इंफार्क्शन का इतिहास

═════════════════════════════════════════════════════════════

⚠️  [चल रहे कार्डियोलॉजी प्रबंधन की आवश्यकता है]

नैदानिक निष्कर्ष:

• पिछले इंफार्क्शन क्षेत्र में रोगसूचक Q तरंगें

• लगातार एसटी-टी तरंग असामान्यताएं

• मायोकार्डियल निशान ऊतक का प्रमाण

• संभावित बाएं निलय पुनर्निर्माण

• आवर्ती घटनाओं के लिए जोखिम प्रोफाइल

═════════════════════════════════════════════════════════════

आकलन:

• निभरा हुआ या पुरानी post-myocardial infarction पैटर्न का पता चला।

• पैटर्न निशान ऊतक निर्माण के साथ पुराने इंफार्क्शन के अनुरूप है।

• दीर्घकालिक प्रबंधन के लिए सीरीज ईसीजी और निगरानी आवश्यक है।

═════════════════════════════════════════════════════════════

जोखिम कारक:

• आप आवर्ती मायोकार्डियल इंफार्क्शन के बढ़े हुए जोखिम में हैं।

• दिल की विफलता का विकास एक चिंता है।

• निलयी अतालताएं हो सकती हैं।

• अचानक कार्डियक मृत्यु का जोखिम मौजूद है।

═════════════════════════════════════════════════════════════

अनुशंसित प्रबंधन:

1. कार्डियोलॉजी अनुवर्ती जारी रखें (हर 3-6 महीने)

2. साक्ष्य-आधारित दवाएं बनाए रखें:
   - एंटीप्लेटलेट थेरेपी (एस्पिरिन +/- P2Y12 अवरोधक)
   - दर नियंत्रण के लिए बीटा-ब्लॉकर
   - पुनर्निर्माण के लिए ACE अवरोधक या ARB
   - लिपिड प्रबंधन के लिए स्टैटिन

3. कार्डियक पुनर्वास कार्यक्रम

4. जीवनशैली संशोधन (आहार, व्यायाम, तनाव प्रबंधन)

5. जोखिम कारक प्रबंधन (BP, मधुमेह, कोलेस्ट्रॉल)

6. नियमित कार्यात्मक मूल्यांकन

═════════════════════════════════════════════════════════════`,
    },

    es: {
        Normal: `═════════════════════════════════════════════════════════════

RITMO SINUSAL NORMAL - ECG SALUDABLE

═════════════════════════════════════════════════════════════

HALLAZGOS CLÍNICOS:

• Frecuencia Cardíaca: Regular y dentro del rango normal (60-100 BPM)

• Ondas P: Presentes, erectas y uniformes

• Intervalo PR: Duración normal (120-200ms)

• Complejo QRS: Duración normal (<120ms)

• Segmento ST: En la línea isoeléctrica

• Ondas T: Erectas y simétricas

• Ritmo: No se detectaron arritmias

═════════════════════════════════════════════════════════════

EVALUACIÓN:

• La actividad eléctrica de su corazón es normal y saludable.

• Todos los intervalos y segmentos están dentro de los rangos normales.

• Continúe con el mantenimiento regular de la salud cardiovascular.

• Se recomienda el cribado ECG periódico según las pautas.

═════════════════════════════════════════════════════════════`,
    },

    fr: {
        Normal: `═════════════════════════════════════════════════════════════

RYTHME SINUSAL NORMAL - ECG SAIN

═════════════════════════════════════════════════════════════

RÉSULTATS CLINIQUES:

• Fréquence Cardiaque: Régulière et dans la plage normale (60-100 BPM)

• Ondes P: Présentes, droites et uniformes

• Intervalle PR: Durée normale (120-200ms)

• Complexe QRS: Durée normale (<120ms)

• Segment ST: Sur la ligne iso-électrique

• Ondes T: Droites et symétriques

• Rythme: Aucune arythmie détectée

═════════════════════════════════════════════════════════════

ÉVALUATION:

• L'activité électrique de votre cœur est normale et saine.

• Tous les intervalles et segments sont dans les plages normales.

• Continuez l'entretien régulier de la santé cardiovasculaire.

• Le dépistage ECG de routine est recommandé selon les directives.

═════════════════════════════════════════════════════════════`,
    },

    de: {
        Normal: `═════════════════════════════════════════════════════════════

NORMALER SINUSRHYTHMUS - GESUNDES EKG

═════════════════════════════════════════════════════════════

KLINISCHE BEFUNDE:

• Herzfrequenz: Regelmäßig und im normalen Bereich (60-100 BPM)

• P-Wellen: Vorhanden, aufrecht und einheitlich

• PR-Intervall: Normale Dauer (120-200ms)

• QRS-Komplex: Normale Dauer (<120ms)

• ST-Segment: Auf der isoelektrischen Linie

• T-Wellen: Aufrecht und symmetrisch

• Rhythmus: Keine Arrhythmien erkannt

═════════════════════════════════════════════════════════════

BEWERTUNG:

• Die elektrische Aktivität Ihres Herzens ist normal und gesund.

• Alle Intervalle und Segmente liegen in normalen Bereichen.

• Setzen Sie die regelmäßige kardiovaskuläre Gesundheitspflege fort.

• Routinemäßige EKG-Vorsorge wird nach Richtlinien empfohlen.

═════════════════════════════════════════════════════════════`,
    },

    pt: {
        Normal: `═════════════════════════════════════════════════════════════

RITMO SINUSAL NORMAL - ECG SAUDÁVEL

═════════════════════════════════════════════════════════════

ACHADOS CLÍNICOS:

• Frequência Cardíaca: Regular e dentro da faixa normal (60-100 BPM)

• Ondas P: Presentes, direitas e uniformes

• Intervalo PR: Duração normal (120-200ms)

• Complexo QRS: Duração normal (<120ms)

• Segmento ST: Na linha isoelétrica

• Ondas T: Direitas e simétricas

• Ritmo: Sem arritmias detectadas

═════════════════════════════════════════════════════════════

AVALIAÇÃO:

• A atividade elétrica do seu coração é normal e saudável.

• Todos os intervalos e segmentos estão dentro dos intervalos normais.

• Continuar a manutenção regular da saúde cardiovascular.

• Rastreamento de ECG rotineiro recomendado de acordo com as diretrizes.

═════════════════════════════════════════════════════════════`,
    },

    zh: {
        Normal: `═════════════════════════════════════════════════════════════

正常窦性心律 - 健康心电图

═════════════════════════════════════════════════════════════

临床发现:

• 心率: 规则且在正常范围内 (60-100 BPM)

• P 波: 存在、竖立且均匀

• PR 间期: 正常持续时间 (120-200ms)

• QRS 复合波: 正常持续时间 (<120ms)

• ST 段: 在等电线上

• T 波: 竖立且对称

• 心律: 未检测到心律不齐

═════════════════════════════════════════════════════════════

评估:

• 您的心脏电活动正常且健康。

• 所有间期和节段都在正常范围内。

• 继续定期进行心血管健康维护。

• 根据指南建议进行常规心电图筛查。

═════════════════════════════════════════════════════════════`,
    },

    ja: {
        Normal: `═════════════════════════════════════════════════════════════

正常洞房結節 - 健康なECG

═════════════════════════════════════════════════════════════

臨床所見:

• 心拍数: 規則で正常範囲内 (60-100 BPM)

• P波: 存在、直立、均一

• PR間隔: 正常期間 (120-200ms)

• QRS複合波: 正常期間 (<120ms)

• ST分節: 等電位線上

• T波: 直立、対称

• 律動: 不整脈なし

═════════════════════════════════════════════════════════════

評価:

• あなたの心臓の電気活動は正常で健康です。

• すべての間隔と分節は正常範囲内です。

• 定期的な心血管健康管理を継続してください。

• ガイドラインに従ったルーチンECG検診をお勧めします。

═════════════════════════════════════════════════════════════`,
    },

    ru: {
        Normal: `═════════════════════════════════════════════════════════════

НОРМАЛЬНЫЙ СИНУСОВЫЙ РИТМ - ЗДОРОВОЕ ЭКГ

═════════════════════════════════════════════════════════════

КЛИНИЧЕСКИЕ ДАННЫЕ:

• Частота сердечных сокращений: Регулярный и в пределах нормы (60-100 BPM)

• P-волны: Присутствуют, вертикальные и единообразные

• PR интервал: Нормальная продолжительность (120-200ms)

• QRS комплекс: Нормальная продолжительность (<120ms)

• ST сегмент: На изолинии

• T-волны: Вертикальные и симметричные

• Ритм: Аритмия не обнаружена

═════════════════════════════════════════════════════════════

ОЦЕНКА:

• Электрическая активность вашего сердца нормальна и здорова.

• Все интервалы и сегменты находятся в пределах нормы.

• Продолжайте регулярный уход за здоровьем сердечно-сосудистой системы.

• Рекомендуется плановое ЭКГ скрининг согласно рекомендациям.

═════════════════════════════════════════════════════════════`,
    },

    ar: {
        Normal: `═════════════════════════════════════════════════════════════

نظم الجيب الطبيعي - تخطيط قلب صحي

═════════════════════════════════════════════════════════════

النتائج السريرية:

• معدل ضربات القلب: منتظم وضمن النطاق الطبيعي (60-100 BPM)

• موجات P: موجودة وقائمة وموحدة

• فترة PR: المدة الطبيعية (120-200ms)

• مركب QRS: المدة الطبيعية (<120ms)

• قطعة ST: على الخط السيسوليتري

• موجات T: قائمة وتماثل

• الإيقاع: لم يتم الكشف عن عدم انتظام ضربات

═════════════════════════════════════════════════════════════

التقييم:

• النشاط الكهربائي لقلبك طبيعي وصحي.

• جميع الفترات والقطاعات ضمن النطاقات الطبيعية.

• استمر في صيانة صحة القلب والأوعية الدموية بشكل منتظم.

• يُنصح بفحص تخطيط القلب الروتيني وفقاً للمبادئ التوجيهية.

═════════════════════════════════════════════════════════════`,
    },

    it: {
        Normal: `═════════════════════════════════════════════════════════════

RITMO SINUSALE NORMALE - ECG SANO

═════════════════════════════════════════════════════════════

RISULTATI CLINICI:

• Frequenza cardiaca: Regolare e nell'intervallo normale (60-100 BPM)

• Onde P: Presenti, erette e uniformi

• Intervallo PR: Durata normale (120-200ms)

• Complesso QRS: Durata normale (<120ms)

• Segmento ST: Sulla linea isoelettrica

• Onde T: Erette e simmetriche

• Ritmo: Nessuna aritmia rilevata

═════════════════════════════════════════════════════════════

VALUTAZIONE:

• L'attività elettrica del tuo cuore è normale e sana.

• Tutti gli intervalli e i segmenti sono entro i ranghi normali.

• Continua la regolare manutenzione della salute cardiovascolare.

• Lo screening ECG di routine è consigliato secondo le linee guida.

═════════════════════════════════════════════════════════════`,
    },

    ko: {
        Normal: `═════════════════════════════════════════════════════════════

정상 동율리듬 - 건강한 심전도

═════════════════════════════════════════════════════════════

임상 소견:

• 심박수: 규칙적이고 정상 범위 내 (60-100 BPM)

• P파: 존재, 직립, 균일

• PR 간격: 정상 지속 시간 (120-200ms)

• QRS 복합파: 정상 지속 시간 (<120ms)

• ST 분절: 등전위선 위

• T파: 직립 및 대칭

• 리듬: 부정맥 감지 없음

═════════════════════════════════════════════════════════════

평가:

• 당신의 심장 전기 활동은 정상이고 건강합니다.

• 모든 간격과 분절이 정상 범위 내에 있습니다.

• 정기적인 심혈관 건강 유지를 계속하십시오.

• 지침에 따른 정기적인 심전도 검진을 권장합니다.

═════════════════════════════════════════════════════════════`,
    },

    tr: {
        Normal: `═════════════════════════════════════════════════════════════

NORMAL SİNÜS RİTMİ - SAĞLIKLI EKG

═════════════════════════════════════════════════════════════

KLİNİK BULGULAR:

• Kalp Atış Hızı: Düzenli ve normal aralıkta (60-100 BPM)

• P Dalgaları: Mevcut, dik ve tek tip

• PR Aralığı: Normal süre (120-200ms)

• QRS Kompleksi: Normal süre (<120ms)

• ST Segmenti: İzolektrik hatta

• T Dalgaları: Dik ve simetrik

• Ritim: Aritmia tespit edilmedi

═════════════════════════════════════════════════════════════

DEĞERLENDİRME:

• Kalbinizin elektrik aktivitesi normal ve sağlıklıdır.

• Tüm aralıklar ve segmentler normal aralıklar içindedir.

• Düzenli kardiyovasküler sağlık bakımını sürdürün.

• Kılavuzlara göre rutin EKG taraması önerilir.

═════════════════════════════════════════════════════════════`,
    },

    th: {
        Normal: `═════════════════════════════════════════════════════════════

จังหวะไซนัสปกติ - หัวใจ ECG ที่สุขภาพดี

═════════════════════════════════════════════════════════════

ผลการตรวจทางคลินิก:

• อัตราการเต้นของหัวใจ: สม่ำเสมอและอยู่ในช่วงปกติ (60-100 BPM)

• คลื่น P: มีอยู่ตั้งตรงและสม่ำเสมอ

• ช่วง PR: ระยะเวลาปกติ (120-200ms)

• คอมเพล็กซ์ QRS: ระยะเวลาปกติ (<120ms)

• ส่วน ST: อยู่บนเส้นไอโซอิเลคตริก

• คลื่น T: ตั้งตรงและสมมาตร

• จังหวะ: ไม่พบการเต้นผิดจังหวะ

═════════════════════════════════════════════════════════════

การประเมิน:

• กิจกรรมไฟฟ้าของหัวใจของคุณปกติและสุขภาพดี

• ช่วงเวลาและส่วนทั้งหมดอยู่ในช่วงปกติ

• ดำเนินการดูแลสุขภาพหัวใจและหลอดเลือดอย่างสม่ำเสมอต่อไป

• แนะนำการคัดกรอง ECG ตามปกติตามหลักเกณฑ์

═════════════════════════════════════════════════════════════`,
    },

    vi: {
        Normal: `═════════════════════════════════════════════════════════════

NHỊP RỄO XA BÌNH THƯỜNG - ECG KHỎE MẠNH

═════════════════════════════════════════════════════════════

PHÁT HIỆN LÂM SÀNG:

• Nhịp tim: Đều đặn và trong phạm vi bình thường (60-100 BPM)

• Sóng P: Hiện diện, thẳng đứng và đồng nhất

• Khoảng PR: Thời lượng bình thường (120-200ms)

• Phức hợp QRS: Thời lượng bình thường (<120ms)

• Phân đoạn ST: Trên đường đẳng điểm

• Sóng T: Thẳng đứng và đối xứng

• Nhịp: Không phát hiện ra loạn nhịp

═════════════════════════════════════════════════════════════

ĐÁNH GIÁ:

• Hoạt động điện của trái tim bạn bình thường và khỏe mạnh.

• Tất cả các khoảng thời gian và đoạn đều nằm trong phạm vi bình thường.

• Tiếp tục bảo trì sức khỏe tim mạch định kỳ.

• Khuyến cáo sàng lọc ECG thường xuyên theo các hướng dẫn.

═════════════════════════════════════════════════════════════`,
    },

    id: {
        Normal: `═════════════════════════════════════════════════════════════

IRAMA SINUS NORMAL - EKG SEHAT

═════════════════════════════════════════════════════════════

TEMUAN KLINIS:

• Detak Jantung: Teratur dan dalam kisaran normal (60-100 BPM)

• Gelombang P: Hadir, tegak, dan seragam

• Interval PR: Durasi normal (120-200ms)

• Kompleks QRS: Durasi normal (<120ms)

• Segmen ST: Di garis isoelek

• Gelombang T: Tegak dan simetris

• Irama: Tidak ada aritmia yang terdeteksi

═════════════════════════════════════════════════════════════

PENILAIAN:

• Aktivitas listrik jantung Anda normal dan sehat.

• Semua interval dan segmen berada dalam kisaran normal.

• Lanjutkan pemeliharaan kesehatan kardiovaskular secara teratur.

• Skrining EKG rutin direkomendasikan sesuai dengan pedoman.

═════════════════════════════════════════════════════════════`,
    },

    pl: {
        Normal: `═════════════════════════════════════════════════════════════

NORMALNY RHYTHM ZATOKOWY - ZDROWE EKG

═════════════════════════════════════════════════════════════

USTALENIA KLINICZNE:

• Tętno: Regularne i w normie (60-100 BPM)

• Fale P: Obecne, pionowe i jednolite

• Interwał PR: Normalny czas trwania (120-200ms)

• Zespół QRS: Normalny czas trwania (<120ms)

• Segment ST: Na linii izoelektrycznej

• Fale T: Pionowe i symetryczne

• Rytm: Nie wykryto arytmii

═════════════════════════════════════════════════════════════

OCENA:

• Aktywność elektryczna serca jest normalna i zdrowa.

• Wszystkie interwały i segmenty mieszczą się w normie.

• Kontynuuj regularną opiekę nad zdrowiem sercowo-naczyniowym.

• Zalecane jest rutynowe badanie EKG zgodnie z wytycznymi.

═════════════════════════════════════════════════════════════`,
    },

    sv: {
        Normal: `═════════════════════════════════════════════════════════════

NORMAL SINUSRYTM - FRISKT EKG

═════════════════════════════════════════════════════════════

KLINISKA FYND:

• Hjärtfrekvens: Regelbunden och inom normalt område (60-100 BPM)

• P-vågor: Närvarande, upprätt och enhetliga

• PR-intervall: Normal varaktighet (120-200ms)

• QRS-komplex: Normal varaktighet (<120ms)

• ST-segment: På isoelektrisk linje

• T-vågor: Upprätt och symmetriska

• Rytm: Ingen arytmi detekterad

═════════════════════════════════════════════════════════════

BEDÖMNING:

• Din hjärtels elektriska aktivitet är normal och frisk.

• Alla intervall och segment ligger inom normala intervall.

• Fortsätt regelbunden hjärt- och kärlhälsovård.

• Rutinmässig EKG-screening rekommenderas enligt riktlinjer.

═════════════════════════════════════════════════════════════`,
    },

    nl: {
        Normal: `═════════════════════════════════════════════════════════════

NORMAAL SINUSRITME - GEZOND ECG

═════════════════════════════════════════════════════════════

KLINISCHE BEVINDINGEN:

• Hartslag: Regelmatig en binnen het normale bereik (60-100 BPM)

• P-golven: Aanwezig, rechtopstaand en uniform

• PR-interval: Normale duur (120-200ms)

• QRS-complex: Normale duur (<120ms)

• ST-segment: Op isolijning

• T-golven: Rechtopstaand en symmetrisch

• Ritme: Geen aritmieën gedetecteerd

═════════════════════════════════════════════════════════════

BEOORDELING:

• De elektrische activiteit van uw hart is normaal en gezond.

• Alle intervallen en segmenten liggen binnen normale bereiken.

• Zet het regelmatig onderhoud van de hartvaten gezondheid voort.

• Routinematig ECG-onderzoek wordt aanbevolen volgens richtlijnen.

═════════════════════════════════════════════════════════════`,
    },

    el: {
        Normal: `═════════════════════════════════════════════════════════════

ΚΑΝΟΝΙΚΟΣ ΚΟΛΠΟΣ ΡΥΘΜΟΣ - ΥΓΙΕΣ ECG

═════════════════════════════════════════════════════════════

ΚΛΙΝΙΚΕΥΟΝΤΩΝ:

• Καρδιακός παλμός: Κανονικός και εντός του κανονικού εύρους (60-100 BPM)

• Κύματα P: Παρά, όρθια και ομοιόμορφα

• Διάστημα PR: Κανονική διάρκεια (120-200ms)

• Σύμπλεγμα QRS: Κανονική διάρκεια (<120ms)

• Τμήμα ST: Στη γραμμή ισοηλεκτρείας

• Κύματα T: Ορθόστατα και συμμετρικά

• Ρυθμός: Δεν ανιχνεύθηκαν αρρυθμίες

═════════════════════════════════════════════════════════════

ΑΞΙΟΛΟΓΗΣΗ:

• Η ηλεκτρική δραστηριότητα της καρδιάς σας είναι φυσιολογική και υγιής.

• Όλα τα διαστήματα και τα τμήματα είναι εντός των κανονικών εύρων.

• Συνεχίστε την τακτική συντήρηση της καρδιαγγειακής υγείας.

• Η ρουτίνα εξέταση ΗΚΓ συνιστάται σύμφωνα με τις κατευθυντήριες γραμμές.

═════════════════════════════════════════════════════════════`,
    },

    he: {
        Normal: `═════════════════════════════════════════════════════════════

קצב סינוס תקין - ECG בריא

═════════════════════════════════════════════════════════════

ממצאים קליניים:

• קצב לב: סדיר ובטווח תקין (60-100 BPM)

• גלי P: קיימים, זקופים ואחידים

• מרווח PR: משך תקין (120-200ms)

• מתחם QRS: משך תקין (<120ms)

• קטע ST: על הקו האיזואלקטרי

• גלי T: זקופים וסימטריים

• קצב: לא התגלו הפרעות קצב

═════════════════════════════════════════════════════════════

הערכה:

• הפעילות החשמלית של הלב שלך תקינה ובריאה.

• כל המרווחים והקטעים נמצאים בטווחים תקינים.

• המשיכו בתחזוקה קבועה של בריאות לב וכלי דם.

• בדיקת ECG שגרתית מומלצת בהתאם להנחיות.

═════════════════════════════════════════════════════════════`,
    },

    uk: {
        Normal: `═════════════════════════════════════════════════════════════

НОРМАЛЬНИЙ СИНУСОВИЙ РИТМ - ЗДОРОВЕ ЕКГ

═════════════════════════════════════════════════════════════

КЛІНІЧНІ ЗНАХІДКИ:

• Частота серцевих скорочень: Регулярна і в межах норми (60-100 BPM)

• P-хвилі: Присутні, вертикальні та однорідні

• Інтервал PR: Нормальна тривалість (120-200ms)

• QRS-комплекс: Нормальна тривалість (<120ms)

• ST-сегмент: На ізолінії

• T-хвилі: Вертикальні та симетричні

• Ритм: Аритмія не виявлена

═════════════════════════════════════════════════════════════

ОЦІНКА:

• Електрична активність вашого серця нормальна і здорова.

• Усі інтервали та сегменти знаходяться в межах норми.

• Продовжуйте регулярний догляд за здоров'ям серцево-судинної системи.

• Рекомендується планове ЕКГ скринування відповідно до рекомендацій.

═════════════════════════════════════════════════════════════`,
    },

    fa: {
        Normal: `═════════════════════════════════════════════════════════════

ریتم سینوسی طبیعی - ECG سالم

═════════════════════════════════════════════════════════════

یافته های بالینی:

• ضربان قلب: منظم و در محدوده طبیعی (60-100 BPM)

• امواج P: موجود، قائم و یکسان

• بازه PR: مدت معمولی (120-200ms)

• کمپلکس QRS: مدت معمولی (<120ms)

• قطعه ST: روی خط ایزولاین

• امواج T: قائم و متقارن

• ریتم: بدون تشخیص بی نظمی قلبی

═════════════════════════════════════════════════════════════

ارزیابی:

• فعالیت الکتریکی قلب شما طبیعی و سالم است.

• تمام فواصل و بخش ها در محدوده های طبیعی هستند.

• نگهداری منظم سلامت قلبی و عروقی را ادامه دهید.

• غربالگری ECG معمولی طبق دستورالعمل ها توصیه می شود.

═════════════════════════════════════════════════════════════`,
    },

    bn: {
        Normal: `═════════════════════════════════════════════════════════════

সাধারণ সাইনাস রিদম - স্বাস্থ্যকর ইসিজি

═════════════════════════════════════════════════════════════

ক্লিনিকাল সন্ধান:

• হৃদস্পন্দন: নিয়মিত এবং স্বাভাবিক পরিসরের মধ্যে (60-100 BPM)

• পি তরঙ্গ: উপস্থিত, সোজা এবং একরূপ

• পিআর ব্যবধান: সাধারণ সময়কাল (120-200ms)

• QRS কমপ্লেক্স: সাধারণ সময়কাল (<120ms)

• এসটি সেগমেন্ট: আইসোইলেক্ট্রিক লাইনে

• টি তরঙ্গ: সোজা এবং প্রতিসম

• ছন্দ: কোনো অ্যারিথমিয়া সনাক্ত করা হয়নি

═════════════════════════════════════════════════════════════

মূল্যায়ন:

• আপনার হৃদয়ের বৈদ্যুতিক কার্যকলাপ স্বাভাবিক এবং স্বাস্থ্যকর।

• সমস্ত ব্যবধান এবং সেগমেন্ট স্বাভাবিক পরিসরের মধ্যে।

• নিয়মিত কার্ডিওভাসকুলার স্বাস্থ্য রক্ষণাবেক্ষণ চালিয়ে যান।

• নির্দেশিকা অনুযায়ী রুটিন ইসিজি স্ক্রীনিং সুপারিশ করা হয়।

═════════════════════════════════════════════════════════════`,
    },

    ta: {
        Normal: `═════════════════════════════════════════════════════════════

சாதாரண சைனஸ் ரிதம் - ஆரோக்கியமான ஈசিஜி

═════════════════════════════════════════════════════════════

மருத்துவ கண்டுபிடிப்புகள்:

• இதயப் துடிப்பு: வழக்கமான மற்றும் சாதாரண வரம்பிற்குள் (60-100 BPM)

• பி அலைகள்: உள்ளன, செங்குத்து மற்றும் சீரான

• பிஆர் இடைவெளி: சாதாரண கால (120-200ms)

• QRS வளாடி: சாதாரண கால (<120ms)

• ST பிரிவு: ஐசோ எலக்ட்ரிக் வரியில்

• டி அலைகள்: செங்குத்து மற்றும் சமச்சீர்

• தாள்: உள்ளக நடிப்பு கண்டுபிடிக்கப்படவில்லை

═════════════════════════════════════════════════════════════

மதிப்பீடு:

• உங்கள் இதயத்தின் மின்சார செயல்பாடு சாதாரணமாகவும் ஆரோக்கியமாகவும் உள்ளது.

• அனைத்து இடைவெளிகள் மற்றும் பிரிவுகளும் சாதாரண வரம்புக்குள் உள்ளன.

• வழக்கமான கார்டியோவாஸ்குலர் உடல்நலப் பராமரிப்பைத் தொடரவும்.

• வழிமுறைகளின் படி வழக்கமான ஈசிஜி பரிசோதனை பரிந்துரைக்கப்படுகிறது.

═════════════════════════════════════════════════════════════`,
    },

    te: {
        Normal: `═════════════════════════════════════════════════════════════

సాధారణ సైనస్ రిథమ్ - ఆరోగ్యకరమైన ఈసిజీ

═════════════════════════════════════════════════════════════

క్లినికల్ ఫైండింగ్‌లు:

• హృదయ స్పందన: క్రమాంకితమైనది మరియు సాధారణ పరిధిలో (60-100 BPM)

• P తరంగాలు: ఉన్నాయి, నిటారుగా మరియు ఏకరూపంగా

• PR విరామం: సాధారణ వ్యవధి (120-200ms)

• QRS కాంప్లెక్స్: సాధారణ వ్యవధి (<120ms)

• ST సెగ్మెంట్: ఐసోఎలెక్ట్రిక్ లైన్ పై

• T తరంగాలు: నిటారుగా మరియు సమరూపత

• రిథమ్: వक్రీకరణ కనుగొనబడలేదు

═════════════════════════════════════════════════════════════

మూల్యాంకనం:

• మీ గుండె యొక్క విద్యుత్ కార్యకలాపం సాధారణమైనది మరియు ఆరోగ్యకరమైనది.

• సమస్త విరామాలు మరియు విభాగాలు సాధారణ పరిధిలో ఉన్నాయి.

• కార్డియోవాస్కులర్ ఆరోగ్య నిర్వహణను నిరంతరం కొనసాగించండి.

• వివరణకు అనుగుణంగా సాధారణ ఈసిజీ స్క్రీనింగ్ సిఫారసు చేయబడింది.

═════════════════════════════════════════════════════════════`,
    },

    kn: {
        Normal: `═════════════════════════════════════════════════════════════

ಸಾಮಾನ್ಯ ಸೈನಸ್ ಲಯ - ಆರೋಗ್ಯಕರ ಇಸಿಜಿ

═════════════════════════════════════════════════════════════

ಕ್ಲಿನಿಕಲ್ ಸಂಶೋಧನೆ:

• ಹೃದಯ ಬಡಿತ: ನಿಯಮಿತ ಮತ್ತು ಸಾಮಾನ್ಯ ವ್ಯಾಪ್ತಿಯೊಳಗೆ (60-100 BPM)

• ಪಿ ತರಂಗಗಳು: ಉಪಸ್ಥಿತ, ನೇರ ಮತ್ತು ಏಕರೂಪ

• ಪಿಆರ ಮಧ್ಯಂತರ: ಸಾಮಾನ್ಯ ಅವಧಿ (120-200ms)

• QRS ಸಂಕೀರ್ಣ: ಸಾಮಾನ್ಯ ಅವಧಿ (<120ms)

• ST ವಿಭಾಗ: ಐಸೋ ಎಲೆಕ್ಟ್ರಿಕ್ ಲೈನ್‌ನಲ್ಲಿ

• T ತರಂಗಗಳು: ನೇರ ಮತ್ತು ಸಮ್ಮಿತ

• ಲಯ: ಯಾವುದೇ ಅರಿದಮ್ಯಾ ಪತ್ತೆಯಾಗಿಲ್ಲ

═════════════════════════════════════════════════════════════

ಮೂಲ್ಯಮಾಪನ:

• ನಿಮ್ಮ ಹೃದಯದ ವಿದ್ಯುತ್ ಚಟುವಟಿಕೆ ಸಾಮಾನ್ಯ ಮತ್ತು ಆರೋಗ್ಯಕರವಾಗಿದೆ.

• ಎಲ್ಲಾ ಮಧ್ಯಂತರಗಳು ಮತ್ತು ವಿಭಾಗಗಳು ಸಾಮಾನ್ಯ ವ್ಯಾಪ್ತಿಯೊಳಗೆ ಇರುತ್ತವೆ.

• ನಿಯಮಿತವಾಗಿ ಹೃದಯ-ರಕ್ತನಾಳ ಆರೋಗ್ಯ ನಿರ್ವಹಣೆ ಮುಂದುವರಿಸಿ.

• ಮಾರ್ಗದರ್ಶನಗಳ ಪ್ರಕಾರ ದಿನಚರಿಯ ಇಸಿಜಿ ಸ್ಕ್ರೀನಿಂಗ್ ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ.

═════════════════════════════════════════════════════════════`,
    },

    ml: {
        Normal: `═════════════════════════════════════════════════════════════

സാധാരണ സൈനസ് റിതം - ആരോഗ്യകരമായ ഇസിജി

═════════════════════════════════════════════════════════════

ക്ലിനിക്കൽ കണ്ടെത്തലുകൾ:

• ഹൃദയ നിരക്ക്: സാധാരണ ശ്രേണിക്കുള്ളിൽ സമ്മതരാണ് (60-100 BPM)

• പി തരംഗങ്ങൾ: നിലവിലുണ്ട്, നിവർന്നു, ഏകരൂപം

• PR ഇടവേള: സാധാരണ കാലാവധി (120-200ms)

• QRS കോംപ്ലെക്സ്: സാധാരണ കാലാവധി (<120ms)

• ST സെഗ്മെൻറ്: ഐസോ ഇലെക്ട്രിക്ക് ലൈനിലെ

• T തരംഗങ്ങൾ: നിവർന്നു കൂടാതെ സമമിതി

• താളം: ഏതെങ്കിലും ജനിതക വൈകല്യം കണ്ടെത്തിയില്ല

═════════════════════════════════════════════════════════════

വിലയിരുത്തൽ:

• നിങ്ങളുടെ ഹൃദയത്തിന്റെ വൈദ്യുതീകരണ പ്രവർത്തനം സാധാരണവും ആരോഗ്യകരവുമാണ്.

• എല്ലാ ഇടവേളകളും സെഗ്മെന്റുകളും സാധാരണ ശ്രേണിയിലുണ്ട്.

• പതിവായി കരോണറി ആരോഗ്യ നിലനിർത്തൽ തുടരുക.

• മാർഗ്ഗനിർദ്ദേശങ്ങൾ അനുസരിച്ച് നിയമിത ഇസിജി സ്കീനിംഗ് ശുപാർശ ചെയ്യപ്പെടുന്നു.

═════════════════════════════════════════════════════════════`,
    },
};

// Get clinical summary for a diagnosis in a specific language
export function getClinicalSummary(diagnosis: string, language: string = 'en'): string {
    const summaryLang = (clinicalSummaries as any)[language];
    if (summaryLang && summaryLang[diagnosis]) {
        return summaryLang[diagnosis];
    }
    
    // Fallback to English
    const englishSummary = (clinicalSummaries as any).en[diagnosis];
    if (englishSummary) {
        return englishSummary;
    }
    
    return "Clinical summary not available for this diagnosis.";
}
