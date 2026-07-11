# Clinical Summary Translations for ECG Analyzer
# Supports all 28 languages with all 4 diagnoses

CLINICAL_SUMMARIES = {
    'en': {
        'Normal': "NORMAL SINUS RHYTHM - HEALTHY ECG\n\nCLINICAL FINDINGS:\n• Heart Rate: Regular (60-100 BPM)\n• P-Waves: Normal and uniform\n• PR Interval: 120-200ms\n• QRS Complex: <120ms\n• ST Segment: At baseline\n• T-Waves: Upright and symmetric\n• No arrhythmias detected\n\nASSESSMENT: Normal cardiac rhythm. All intervals within normal ranges. Continue regular health maintenance.",
        'Myocardial_Infarction': "ACUTE MYOCARDIAL INFARCTION - CRITICAL\n\n⚠️ REQUIRES IMMEDIATE EMERGENCY CARE\n\nCLINICAL FINDINGS:\n• ST-Segment Elevation (≥1mm)\n• Pathological Q waves present\n• T-Wave Inversion noted\n• ST Depression in reciprocal leads\n• Possible QRS widening\n\nASSESSMENT: Evidence of acute myocardial infarction detected. TIME-CRITICAL condition.\n\nIMMEDIATE ACTIONS:\n1. CALL EMERGENCY (911) NOW\n2. Chew aspirin if not allergic\n3. Rest and avoid exertion\n4. Transport to nearest hospital",
        'Abnormal_Heartbeat': "CARDIAC ARRHYTHMIA DETECTED\n\n⚠️ REQUIRES CARDIOLOGY EVALUATION\n\nCLINICAL FINDINGS:\n• Irregular heart rhythm\n• Abnormal rate patterns\n• Ectopic beats present\n• Abnormal P-wave morphology\n• Conduction abnormalities\n\nPOSSIBLE DIAGNOSES:\n• PACs, PVCs, Atrial Fibrillation\n• Supraventricular Tachycardia\n\nRECOMMENDED ACTIONS:\n1. Schedule urgent cardiology consultation\n2. Start continuous monitoring\n3. Avoid caffeine and stress\n4. Report palpitations",
        'MI_history': "HISTORY OF MYOCARDIAL INFARCTION\n\n⚠️ REQUIRES ONGOING MANAGEMENT\n\nCLINICAL FINDINGS:\n• Pathological Q waves present\n• ST-T wave abnormalities\n• Myocardial scar tissue evident\n• Possible left ventricular remodeling\n• Risk of recurrent events\n\nASSESSMENT: Healed/chronic post-MI detected. Serial ECGs essential.\n\nRECOMMENDED MANAGEMENT:\n1. Continue cardiology follow-up\n2. Maintain medications\n3. Cardiac rehabilitation\n4. Healthy lifestyle modifications"
    },
    'hi': {
        'Normal': "सामान्य साइनस लय - स्वस्थ ईसीजी\n\nक्लिनिकल निष्कर्ष:\n• हृदय गति: 60-100 BPM\n• P-तरंगें: सामान्य\n• PR अंतराल: 120-200ms\n• QRS परिसर: <120ms\n• कोई अतालता नहीं\n\nमूल्यांकन: आपका हृदय स्वस्थ है। नियमित स्वास्थ्य जांच जारी रखें।",
        'Myocardial_Infarction': "तीव्र मायोकार्डियल इनफार्क्शन - गंभीर\n\n⚠️ तुरंत आपातकालीन देखभाल की आवश्यकता\n\nक्लिनिकल निष्कर्ष:\n• ST-सेगमेंट ऊंचाई\n• पैथोलॉजिकल Q तरंगें\n• T-तरंग इनवर्जन\n\nमूल्यांकन: तीव्र हृदय रोधगलन के संकेत। तुरंत कार्रवाई करें।\n\nतुरंत कार्रवाई:\n1. 911 को कॉल करें\n2. एस्पिरिन लें\n3. आराम करें",
        'Abnormal_Heartbeat': "असामान्य हृदय गति\n\n⚠️ कार्डियोलॉजी मूल्यांकन की आवश्यकता\n\nक्लिनिकल निष्कर्ष:\n• अनियमित हृदय गति\n• असामान्य दर पैटर्न\n• चालन असामान्यताएं\n\nअनुशंसित कार्रवाई:\n1. कार्डियोलॉजी परामर्श\n2. निरंतर निगरानी\n3. कैफीन से बचें",
        'MI_history': "मायोकार्डियल इनफार्क्शन का इतिहास\n\n⚠️ चल रहे प्रबंधन की आवश्यकता\n\nक्लिनिकल निष्कर्ष:\n• पैथोलॉजिकल Q तरंगें\n• ST-T तरंग असामान्यताएं\n• हृदय पेशी निशान\n\nमूल्यांकन: पुरानी पोस्ट-MI स्थिति। चल रहा दिल की देखभाल आवश्यक।"
    },
    'es': {
        'Normal': "RITMO SINUSAL NORMAL - ECG SALUDABLE\n\nHALLAZGOS CLÍNICOS:\n• Frecuencia cardíaca: 60-100 BPM\n• Ondas P: Normales\n• Intervalo PR: 120-200ms\n• Complejo QRS: <120ms\n• Sin arritmias detectadas\n\nEVALUACIÓN: Corazón normal y saludable.",
        'Myocardial_Infarction': "INFARTO AGUDO DE MIOCARDIO - CRÍTICO\n\n⚠️ REQUIERE ATENCIÓN MÉDICA INMEDIATA\n\nHALLAZGOS CLÍNICOS:\n• Elevación ST\n• Ondas Q patológicas\n• Inversión de onda T\n\nEVALUACIÓN: Infarto de miocardio agudo detectado.\n\nACCIONES INMEDIATAS:\n1. Llamar al 911\n2. Tomar aspirina\n3. Descansar",
        'Abnormal_Heartbeat': "ARRITMIA CARDÍACA DETECTADA\n\n⚠️ REQUIERE EVALUACIÓN CARDIOLÓGICA\n\nHALLAZGOS CLÍNICOS:\n• Ritmo cardíaco irregular\n• Patrones de ritmo anormales\n• Anomalías de conducción\n\nACCIONES RECOMENDADAS:\n1. Consulta cardiolóica urgente\n2. Monitoreo continuo\n3. Evite cafeína",
        'MI_history': "HISTORIA DE INFARTO DE MIOCARDIO\n\n⚠️ REQUIERE MANEJO CONTINUO\n\nHALLAZGOS CLÍNICOS:\n• Ondas Q patológicas\n• Anomalías ST-T\n• Cicatriz miocárdica\n\nEVALUACIÓN: Infarto antiguo detectado. Seguimiento cardiaco esencial."
    },
    'fr': {
        'Normal': "RYTHME SINUSAL NORMAL - ECG SAIN\n\nRÉSULTATS CLINIQUES:\n• Fréquence cardiaque: 60-100 BPM\n• Ondes P: Normales\n• Intervalle PR: 120-200ms\n• Complexe QRS: <120ms\n• Aucune arythmie détectée\n\nÉVALUATION: Cœur normal et sain.",
        'Myocardial_Infarction': "INFARCTUS DU MYOCARDE AIGU - CRITIQUE\n\n⚠️ NÉCESSITE SOINS D'URGENCE IMMÉDIATS\n\nRÉSULTATS CLINIQUES:\n• Sus-décalage ST\n• Ondes Q pathologiques\n• Inversion d'onde T\n\nÉVALUATION: Infarctus aigu du myocarde détecté.\n\nACTIONS IMMÉDIATES:\n1. Appelez le 15\n2. Prenez de l'aspirine\n3. Reposez-vous",
        'Abnormal_Heartbeat': "ARYTHMIE CARDIAQUE DÉTECTÉE\n\n⚠️ NÉCESSITE ÉVALUATION CARDIOLOGIQUE\n\nRÉSULTATS CLINIQUES:\n• Rythme cardiaque irrégulier\n• Motifs de fréquence anormaux\n• Anomalies de conduction\n\nACTIONS RECOMMANDÉES:\n1. Consultation cardiologique urgente\n2. Surveillance continue\n3. Évitez la caféine",
        'MI_history': "ANTÉCÉDENT D'INFARCTUS DU MYOCARDE\n\n⚠️ NÉCESSITE UNE PRISE EN CHARGE CONTINUE\n\nRÉSULTATS CLINIQUES:\n• Ondes Q pathologiques\n• Anomalies ST-T\n• Cicatrice myocardique\n\nÉVALUATION: Infarctus ancien détecté. Suivi cardiaque essentiel."
    },
    'de': {
        'Normal': "NORMALER SINUSRHYTHMUS - GESUNDES EKG\n\nKLINISCHE BEFUNDE:\n• Herzfrequenz: 60-100 BPM\n• P-Wellen: Normal\n• PR-Intervall: 120-200ms\n• QRS-Komplex: <120ms\n• Keine Arrhythmien\n\nBEWERTUNG: Ihr Herz ist gesund und normal.",
        'Myocardial_Infarction': "AKUTER MYOKARDINFARKT - KRITISCH\n\n⚠️ BENÖTIGT SOFORTIGE NOTFALLBETREUUNG\n\nKLINISCHE BEFUNDE:\n• ST-Streckenhebung\n• Pathologische Q-Zacken\n• T-Wellen-Inversion\n\nBEWERTUNG: Akuter Myokardinfarkt erkannt.\n\nSOFORTMASSNAHMEN:\n1. Notarzt rufen (112)\n2. Aspirin nehmen\n3. Ruhen",
        'Abnormal_Heartbeat': "HERZRHYTHMUSSTÖRUNG ERKANNT\n\n⚠️ KARDIOLOGISCHE BEWERTUNG ERFORDERLICH\n\nKLINISCHE BEFUNDE:\n• Unregelmäßiger Herzrhythmus\n• Anomale Frequenzmuster\n• Leitungsstörungen\n\nEMPFOHLENE MASSNAHMEN:\n1. Dringende kardiologische Beratung\n2. Kontinuierliche Überwachung\n3. Koffein vermeiden",
        'MI_history': "GESCHICHTE DES MYOKARDINFARKTS\n\n⚠️ ERFORDERT LAUFENDE VERWALTUNG\n\nKLINISCHE BEFUNDE:\n• Pathologische Q-Zacken\n• ST-T-Anomalien\n• Herzmuskelnarbe\n\nBEWERTUNG: Alter Infarkt nachgewiesen. Fortlaufende kardiologische Überwachung erforderlich."
    },
    'pt': {
        'Normal': "RITMO SINUSAL NORMAL - ECG SAUDÁVEL\n\nHALADOS CLÍNICOS:\n• Frequência cardíaca: 60-100 BPM\n• Ondas P: Normais\n• Intervalo PR: 120-200ms\n• Complexo QRS: <120ms\n• Sem arritmias\n\nAVALIAÇÃO: Seu coração é saudável e normal.",
        'Myocardial_Infarction': "INFARTO AGUDO DO MIOCÁRDIO - CRÍTICO\n\n⚠️ NECESSITA ATENDIMENTO EMERGENCIAL IMEDIATO\n\nHALADOS CLÍNICOS:\n• Supradesnivelamento ST\n• Ondas Q patológicas\n• Inversão de onda T\n\nAVALIAÇÃO: Infarto agudo do miocárdio detectado.\n\nAÇÕES IMEDIATAS:\n1. Ligue para 192\n2. Tome aspirina\n3. Descanse",
        'Abnormal_Heartbeat': "ARRITMIA CARDÍACA DETECTADA\n\n⚠️ REQUER AVALIAÇÃO CARDIOLÓGICA\n\nHALADOS CLÍNICOS:\n• Ritmo cardíaco irregular\n• Padrões anormais\n• Anomalias de condução\n\nAÇÕES RECOMENDADAS:\n1. Consulta cardiológica urgente\n2. Monitoramento contínuo\n3. Evite cafeína",
        'MI_history': "HISTÓRICO DE INFARTO DO MIOCÁRDIO\n\n⚠️ REQUER MANEJO CONTÍNUO\n\nHALADOS CLÍNICOS:\n• Ondas Q patológicas\n• Anomalias ST-T\n• Cicatriz miocárdica\n\nAVALIAÇÃO: Infarto antigo detectado. Acompanhamento cardiaco essencial."
    },
    'zh': {
        'Normal': "正常窦性心律 - 健康心电图\n\n临床发现:\n• 心率: 60-100 BPM\n• P波: 正常\n• PR间期: 120-200ms\n• QRS波群: <120ms\n• 无心律不齐\n\n评估: 您的心脏正常健康。",
        'Myocardial_Infarction': "急性心肌梗死 - 危急\n\n⚠️ 需要立即急救\n\n临床发现:\n• ST段抬高\n• 异常Q波\n• T波倒置\n\n评估: 检测到急性心肌梗死。\n\n立即行动:\n1. 拨打120\n2. 服用阿司匹林\n3. 休息",
        'Abnormal_Heartbeat': "检测到心律不齐\n\n⚠️ 需要心脏病专家评估\n\n临床发现:\n• 心律不规则\n• 异常节律模式\n• 传导异常\n\n建议行动:\n1. 紧急心脏病咨询\n2. 持续监测\n3. 避免咖啡因",
        'MI_history': "心肌梗死病史\n\n⚠️ 需要持续管理\n\n临床发现:\n• 异常Q波\n• ST-T异常\n• 心肌瘢痕\n\n评估: 检测到陈旧性心肌梗死。需要持续心脏监测。"
    },
    'ja': {
        'Normal': "正常洞性律 - 健康なECG\n\n臨床所見:\n• 心拍数: 60-100 BPM\n• P波: 正常\n• PR間隔: 120-200ms\n• QRS複合体: <120ms\n• 不整脈なし\n\n評価: あなたの心臓は健康です。",
        'Myocardial_Infarction': "急性心筋梗塞 - 緊急\n\n⚠️ 直ちに緊急治療が必要\n\n臨床所見:\n• ST上昇\n• Q波異常\n• T波反転\n\n評価: 急性心筋梗塞を検出しました。\n\n直ちに対応:\n1. 119番通報\n2. アスピリン服用\n3. 安静",
        'Abnormal_Heartbeat': "不整脈検出\n\n⚠️ 心臓医の評価が必要\n\n臨床所見:\n• 不規則な心拍\n• 異常な周期パターン\n• 伝導異常\n\n推奨処置:\n1. 緊急心臓科相談\n2. 継続的監視\n3. カフェイン回避",
        'MI_history': "心筋梗塞の病歴\n\n⚠️ 継続的な管理が必要\n\n臨床所見:\n• Q波異常\n• ST-T異常\n• 心筋疤痕\n\n評価: 陳旧性心筋梗塞を検出しました。"
    },
    'ru': {
        'Normal': "НОРМАЛЬНЫЙ СИНУСОВЫЙ РИТМ\n\nКЛИНИЧЕСКИЕ НАХОДКИ:\n• Частота пульса: 60-100 BPM\n• Зубцы P: Норма\n• Интервал PQ: 120-200ms\n• Комплекс QRS: <120ms\n• Аритмий не обнаружено\n\nОЦЕНКА: Ваше сердце здорово и нормально.",
        'Myocardial_Infarction': "ОСТРЫЙ ИНФАРКТ МИОКАРДА - КРИТИЧЕСКИЙ\n\n⚠️ ТРЕБУЕТСЯ НЕМЕДЛЕННАЯ СКОРАЯ ПОМОЩЬ\n\nКЛИНИЧЕСКИЕ НАХОДКИ:\n• Подъем ST\n• Патологические зубцы Q\n• Инверсия зубца T\n\nОЦЕНКА: Обнаружен острый инфаркт миокарда.\n\nНЕМЕДЛЕННЫЕ ДЕЙСТВИЯ:\n1. Вызовите 112\n2. Примите аспирин\n3. Отдыхайте",
        'Abnormal_Heartbeat': "ОБНАРУЖЕНА АРИТМИЯ\n\n⚠️ ТРЕБУЕТСЯ КАРДИОЛОГИЧЕСКАЯ ОЦЕНКА\n\nКЛИНИЧЕСКИЕ НАХОДКИ:\n• Нерегулярный сердечный ритм\n• Аномальные модели ритма\n• Нарушения проводимости\n\nРЕКОМЕНДУЕМЫЕ ДЕЙСТВИЯ:\n1. Срочная консультация кардиолога\n2. Непрерывный мониторинг\n3. Избегайте кофеина",
        'MI_history': "ИСТОРИЯ ИНФАРКТА МИОКАРДА\n\n⚠️ ТРЕБУЕТСЯ ПОСТОЯННОЕ УПРАВЛЕНИЕ\n\nКЛИНИЧЕСКИЕ НАХОДКИ:\n• Патологические зубцы Q\n• Аномалии ST-T\n• Рубец миокарда\n\nОЦЕНКА: Выявлен старый инфаркт миокарда. Требуется постоянный мониторинг."
    },
    'ar': {
        'Normal': "النظم الجيبي الطبيعي - رسم القلب الصحي\n\nالنتائج السريرية:\n• معدل ضربات القلب: 60-100 نبضة\n• موجات P: طبيعية\n• فترة PR: 120-200ms\n• مركب QRS: <120ms\n• لا توجد اضطرابات نظم\n\nالتقييم: قلبك سليم وطبيعي.",
        'Myocardial_Infarction': "احتشاء عضلة القلب الحاد - حرج\n\n⚠️ يتطلب عناية طارئة فورية\n\nالنتائج السريرية:\n• ارتفاع ST\n• موجات Q أثرية\n• انعكاس الموجة T\n\nالتقييم: تم اكتشاف احتشاء عضلة القلب الحاد.\n\nإجراءات فورية:\n1. اتصل 911\n2. تناول الأسبرين\n3. استرح",
        'Abnormal_Heartbeat': "اكتشاف عدم انتظام ضربات القلب\n\n⚠️ يتطلب تقييم أمراض القلب\n\nالنتائج السريرية:\n• نبضات القلب غير المنتظمة\n• أنماط معدل غير طبيعية\n• تشوهات التوصيل\n\nالإجراءات الموصى بها:\n1. استشارة طبية عاجلة\n2. مراقبة مستمرة\n3. تجنب الكافيين",
        'MI_history': "تاريخ احتشاء عضلة القلب\n\n⚠️ يتطلب إدارة مستمرة\n\nالنتائج السريرية:\n• موجات Q أثرية\n• تشوهات ST-T\n• ندبة عضلة القلب\n\nالتقييم: تم اكتشاف احتشاء قديم. المراقبة المستمرة ضرورية."
    },
    'it': {
        'Normal': "RITMO SINUSALE NORMALE - ECG SANO\n\nRISULTATI CLINICI:\n• Frequenza cardiaca: 60-100 BPM\n• Onde P: Normali\n• Intervallo PR: 120-200ms\n• Complesso QRS: <120ms\n• Nessuna aritmia\n\nVALUTAZIONE: Il vostro cuore è sano e normale.",
        'Myocardial_Infarction': "INFARTO ACUTO DEL MIOCARDIO - CRITICO\n\n⚠️ RICHIEDE SOCCORSI D'EMERGENZA IMMEDIATI\n\nRISULTATI CLINICI:\n• Sopraelevazione ST\n• Onde Q patologiche\n• Inversione dell'onda T\n\nVALUTAZIONE: Infarto acuto del miocardio rilevato.\n\nAZIONI IMMEDIATE:\n1. Chiama 118\n2. Prendi aspirina\n3. Riposa",
        'Abnormal_Heartbeat': "ARITMIA CARDIACA RILEVATA\n\n⚠️ RICHIEDE VALUTAZIONE CARDIOLOGICA\n\nRISULTATI CLINICI:\n• Ritmo cardiaco irregolare\n• Modelli di frequenza anormali\n• Anomalie di conduzione\n\nAZIONI CONSIGLIATE:\n1. Consulenza cardiologica urgente\n2. Monitoraggio continuo\n3. Evita la caffeina",
        'MI_history': "STORIA DI INFARTO DEL MIOCARDIO\n\n⚠️ RICHIEDE GESTIONE CONTINUA\n\nRISULTATI CLINICI:\n• Onde Q patologiche\n• Anomalie ST-T\n• Cicatrice miocardica\n\nVALUTAZIONE: Infarto vecchio rilevato. Monitoraggio continuo essenziale."
    },
    'ko': {
        'Normal': "정상 동성 리듬 - 건강한 심전도\n\n임상 소견:\n• 심박수: 60-100 BPM\n• P파: 정상\n• PR 간격: 120-200ms\n• QRS 복합체: <120ms\n• 부정맥 없음\n\n평가: 당신의 심장은 건강하고 정상입니다.",
        'Myocardial_Infarction': "급성 심근경색 - 위험\n\n⚠️ 즉시 응급 치료 필요\n\n임상 소견:\n• ST 상승\n• 병리적 Q파\n• T파 역위\n\n평가: 급성 심근경색이 감지되었습니다.\n\n즉시 조치:\n1. 119번 전화\n2. 아스피린 복용\n3. 휴식",
        'Abnormal_Heartbeat': "심부정맥 감지\n\n⚠️ 심장과 전문의 평가 필요\n\n임상 소견:\n• 불규칙한 심박동\n• 비정상 심박수 패턴\n• 전도 이상\n\n권장 조치:\n1. 긴급 심장내과 상담\n2. 지속적 모니터링\n3. 카페인 피하기",
        'MI_history': "심근경색 병력\n\n⚠️ 지속적 관리 필요\n\n임상 소견:\n• 병리적 Q파\n• ST-T 이상\n• 심근 반흔\n\n평가: 만성 심근경색이 감지되었습니다. 계속적인 모니터링 필요."
    },
    'tr': {
        'Normal': "NORMAL SİNÜS RİTMİ - SAĞLIK EKG\n\nKLİNİK BULGULARı:\n• Kalp Hızı: 60-100 BPM\n• P Dalgaları: Normal\n• PR Aralığı: 120-200ms\n• QRS Kompleksi: <120ms\n• Aritmisi Yok\n\nDEĞERLENDİRME: Kalbiniz sağlıklı ve normaldir.",
        'Myocardial_Infarction': "AKUT MİYOKARD İNFARKTÜSÜ - KRİTİK\n\n⚠️ DERHAL ACİL BAKIM GEREKLİDİR\n\nKLİNİK BULGULARı:\n• ST Yükselmesi\n• Patolojik Q Dalgaları\n• T Dalga İnversiyonu\n\nDEĞERLENDİRME: Akut miyokard infarktüsü tespit edildi.\n\nACİL ADIMLAR:\n1. 112'yi Ara\n2. Aspirin Al\n3. İstirah Et",
        'Abnormal_Heartbeat': "KARDİYAK ARİTMİ TESPİT EDİLDİ\n\n⚠️ KARDİYOLOGİK DEĞERLENDİRME GEREKLİDİR\n\nKLİNİK BULGULARı:\n• Düzensiz Kalp Hızı\n• Anormal Hız Desenleri\n• İletim Anomalileri\n\nÖNERİLEN ADIMLAR:\n1. Acil Kardiyoloji Danışması\n2. Sürekli İzleme\n3. Kafein Kaçının",
        'MI_history': "MİYOKARD İNFARKTÜSÜ TARİHÇESİ\n\n⚠️ DEVAM EDEN YÖNETİM GEREKLİDİR\n\nKLİNİK BULGULARı:\n• Patolojik Q Dalgaları\n• ST-T Anomalileri\n• Miyokard Skarı\n\nDEĞERLENDİRME: Eski miyokard infarktüsü tespit edildi."
    },
    'th': {
        'Normal': "จังหวะไซนัสปกติ - หัวใจสุขภาพดี\n\nการค้นหาทางคลินิก:\n• อัตราการเต้นของหัวใจ: 60-100 BPM\n• คลื่น P: ปกติ\n• ช่วง PR: 120-200ms\n• QRS คอมเพล็กซ์: <120ms\n• ไม่มีหลอดเลือดแตก\n\nการประเมিน: หัวใจของคุณสุขภาพดี",
        'Myocardial_Infarction': "احتشاء عضلة القلب حاد - วิกฤต\n\n⚠️ จำเป็นต้องได้รับการดูแลฉุกเฉินทันที\n\nการค้นหาทางคลินิก:\n• ยกระดับ ST\n• คลื่น Q ที่ผิดปกติ\n• การพลิกกลับของคลื่น T\n\nการประเมิน: พบการตายของเนื้อหัวใจ",
        'Abnormal_Heartbeat': "พบการเต้นของหัวใจผิดปกติ\n\n⚠️ ต้องการประเมินอาการหัวใจ\n\nการค้นหาทางคลินิก:\n• จังหวะหัวใจไม่สม่ำเสมอ\n• ปกติผิดการเต้น\n• ความผิดปกติในการนำ\n\nการกระทำที่แนะนำ:\n1. ปรึกษาศัลยศาสตรกรหัวใจด่วน\n2. การตรวจสอบอย่างต่อเนื่อง\n3. หลีกเลี่ยงคาเฟอีน",
        'MI_history': "ประวัติการตายของเนื้อหัวใจ\n\n⚠️ ต้องการการบริหารจัดการต่อเนื่อง\n\nการค้นหาทางคลินิก:\n• คลื่น Q ที่ผิดปกติ\n• ความผิดปกติ ST-T\n• แผลเป็นของหัวใจ\n\nการประเมิน: พบการตายของเนื้อหัวใจเก่า"
    },
    'vi': {
        'Normal': "NHỊP XOANG BÌNH THƯỜNG - ĐIỆN TIM KHỎE MẠNH\n\nHOA SINH LâM SÀNG:\n• Nhịp tim: 60-100 BPM\n• Sóng P: Bình thường\n• Khoảng PR: 120-200ms\n• QRS phức hợp: <120ms\n• Không rối loạn nhịp tim\n\nDMVĐG: Tim bạn khỏe mạnh và bình thường.",
        'Myocardial_Infarction': "NHỒI MỤC CƠ TIM CẤP - NGUY HIỂM\n\n⚠️ CẦN CHĂM SÓC CẤP CỨU NGAY LẬP TỨC\n\nHOA SINH LâM SÀNG:\n• Nâng đoạn ST\n• Sóng Q bệnh lý\n• Đảo ngược sóng T\n\nDMVĐG: Phát hiện nhồi mục cơ tim cấp.",
        'Abnormal_Heartbeat': "PHÁT HIỆN RỐI LOẠN NHỊP TIM\n\n⚠️ CẦN ĐÁNH GIÁ TIM MẠCH\n\nHOA SINH LâM SÀNG:\n• Nhịp tim không đều\n• Mô hình nhịp bất thường\n• Rối loạn dẫn truyền\n\nHĂNG CS ĐỀ NGHỊ:\n1. Tư vấn tim mạch khẩn cấp\n2. Giám sát liên tục\n3. Tránh caffeine",
        'MI_history': "TIỀN SỬ NHỒI MỤC CƠ TIM\n\n⚠️ CẦN QUẢN LÝ LIÊN TỤC\n\nHOA SINH LâM SÀNG:\n• Sóng Q bệnh lý\n• Rối loạn ST-T\n• Mô sẹo cơ tim\n\nDMVĐG: Phát hiện nhồi mục cũ. Giám sát liên tục cần thiết."
    },
    'id': {
        'Normal': "IRAMA SINUS NORMAL - EKG SEHAT\n\nTEMUAN KLINIS:\n• Detak Jantung: 60-100 BPM\n• Gelombang P: Normal\n• Interval PR: 120-200ms\n• Kompleks QRS: <120ms\n• Tidak ada aritmia\n\nPENILAIAN: Jantung Anda sehat dan normal.",
        'Myocardial_Infarction': "INFARK MIOKARD AKUT - KRITIS\n\n⚠️ MEMERLUKAN PERAWATAN GAWAT DARURAT SEGERA\n\nTEMUAN KLINIS:\n• Elevasi ST\n• Gelombang Q patologis\n• Inversi gelombang T\n\nPENILAIAN: Infark miokard akut terdeteksi.",
        'Abnormal_Heartbeat': "ARITMIA JANTUNG TERDETEKSI\n\n⚠️ MEMERLUKAN EVALUASI KARDIOLOGI\n\nTEMUAN KLINIS:\n• Ritme jantung tidak teratur\n• Pola detak abnormal\n• Kelainan konduksi\n\nTINDAKAN YANG DIREKOMENDASIKAN:\n1. Konsultasi kardiolog mendesak\n2. Pemantauan berkelanjutan\n3. Hindari kafein",
        'MI_history': "RIWAYAT INFARK MIOKARD\n\n⚠️ MEMERLUKAN MANAJEMEN BERKELANJUTAN\n\nTEMUAN KLINIS:\n• Gelombang Q patologis\n• Kelainan ST-T\n• Jaringan parut miokard\n\nPENILAIAN: Infark lama terdeteksi. Pemantauan berkelanjutan diperlukan."
    },
    'pl': {
        'Normal': "NORMALNY RYTM ZATOKOWY - ZDROWE EKG\n\nBADACH KLINICZNYCH:\n• Tętno: 60-100 BPM\n• Fale P: Normalne\n• Przedział PR: 120-200ms\n• Zespół QRS: <120ms\n• Brak arytmii\n\nOCENA: Twoje serce jest zdrowe i normalne.",
        'Myocardial_Infarction': "OSTRY ZAWAŁ SERCA - KRYTYCZNY\n\n⚠️ WYMAGA NATYCHMIASTOWEJ OPIEKI MEDYCZNEJ\n\nBADACH KLINICZNYCH:\n• Uniesienie odcinka ST\n• Patologiczne fale Q\n• Odwrócenie fali T\n\nOCENA: Wykryto ostry zawał serca.",
        'Abnormal_Heartbeat': "ARYTMIA SERCA WYKRYTA\n\n⚠️ WYMAGA OCENY KARDIOLOGA\n\nBADACH KLINICZNYCH:\n• Nieregularny rytm serca\n• Nienormalne wzory bicia\n• Anomalie przewodzenia\n\nZALECANE DZIAŁANIA:\n1. Pilna konsultacja kardiologa\n2. Ciągłe monitorowanie\n3. Unikać kofeiny",
        'MI_history': "HISTORIA ZAWAŁU SERCA\n\n⚠️ WYMAGA CIĄGŁEGO ZARZĄDZANIA\n\nBADACH KLINICZNYCH:\n• Patologiczne fale Q\n• Anomalie ST-T\n• Blizna mięśnia serdecznego\n\nOCENA: Wykryto stary zawał. Ciągłe monitorowanie niezbędne."
    },
    'sv': {
        'Normal': "NORMALT SINUSRYTM - FRISKT EKG\n\nKLINISKA FYND:\n• Hjärtfrekvens: 60-100 BPM\n• P-vågor: Normala\n• PR-intervall: 120-200ms\n• QRS-komplex: <120ms\n• Ingen arytmi\n\nBEDÖMNING: Ditt hjärta är friskt och normalt.",
        'Myocardial_Infarction': "AKUT HJÄRTINFARKT - KRITISK\n\n⚠️ KRÄVER OMEDELBAR AKUTVÅRD\n\nKLINISKA FYND:\n• ST-höjning\n• Patologiska Q-vågor\n• T-vågsomvändning\n\nBEDÖMNING: Akut hjärtinfarkt upptäckt.",
        'Abnormal_Heartbeat': "HJÄRTARYTMI UPPTÄCKT\n\n⚠️ KRÄVER KARDIOLOGISK BEDÖMNING\n\nKLINISKA FYND:\n• Oregelbundna hjärtslag\n• Onormala slag mönster\n• Ledningsstörningar\n\nREKOMMENDERADE ÅTGÄRDER:\n1. Brådskande kardiologisk konsultation\n2. Kontinuerlig övervakning\n3. Undvik koffein",
        'MI_history': "TIDIGARE HJÄRTINFARKT\n\n⚠️ KRÄVER PÅGÅENDE VÅRD\n\nKLINISKA FYND:\n• Patologiska Q-vågor\n• ST-T-abnormiteter\n• Hjärtmuskelär\n\nBEDÖMNING: Gamla hjärtinfarkt upptäckt. Kontinuerlig övervakning nödvändig."
    },
    'nl': {
        'Normal': "NORMAAL SINUSRITME - GEZOND EKG\n\nKLINISCHE BEVINDINGEN:\n• Hartslag: 60-100 BPM\n• P-golven: Normaal\n• PR-interval: 120-200ms\n• QRS-complex: <120ms\n• Geen ritmestoornissen\n\nBEOORDELING: Uw hart is gezond en normaal.",
        'Myocardial_Infarction': "ACUTE HARTINFARCT - KRITIEK\n\n⚠️ VEREIST ONMIDDELLIJKE NOODHULP\n\nKLINISCHE BEVINDINGEN:\n• ST-stijging\n• Pathologische Q-golven\n• T-golfomkering\n\nBEOORDELING: Acute hartinfarct gedetecteerd.",
        'Abnormal_Heartbeat': "HARTRITMESTOORNIS GEDETECTEERD\n\n⚠️ VEREIST CARDIOLOGISCHE BEOORDELING\n\nKLINISCHE BEVINDINGEN:\n• Onregelmatige hartslag\n• Abnormale slagpatronen\n• Geleidingsstoornissen\n\nAANBEVOLEN MAATREGELEN:\n1. Spoedconsult cardioloog\n2. Voortdurende bewaking\n3. Vermijd cafeïne",
        'MI_history': "VOORGESCHIEDENIS HARTINFARCT\n\n⚠️ VEREIST VOORTDURENDE ZORG\n\nKLINISCHE BEVINDINGEN:\n• Pathologische Q-golven\n• ST-T-afwijkingen\n• Hartspierlit\n\nBEOORDELING: Oude hartinfarct opgemerkt. Voortdurende bewaking nodig."
    },
    'el': {
        'Normal': "ΦΥΣΙΟΛΟΓΙΚΟΣ ΚΟΛΠΙΚΟΣ ΡΥΘΜΟΣ - ΥΓΙΕΣ ΗΚΓ\n\nΚΛΙΝΙΚΕΣ ΕΥΡΗΜΑΤΑ:\n• Καρδιακός ρυθμός: 60-100 BPM\n• P κύματα: Φυσιολογικά\n• Διάστημα PR: 120-200ms\n• QRS σύμπλεγμα: <120ms\n• Χωρίς αρρυθμίες\n\nΑΞΙΟΛΟΓΗΣΗ: Η καρδιά σας είναι υγιής και φυσιολογική.",
        'Myocardial_Infarction': "ΟΞΥ ΕΜΦΡΑΓΜΑ ΤΟΥ ΜΥΟΚΑΡΔΙΟΥ - ΚΡΙΣΙΜΟ\n\n⚠️ ΑΠΑΙΤΕΙ ΑΜΕΣΗ ΙΑΤΡΙΚΗ ΒΟΗΘΕΙΑ\n\nΚΛΙΝΙΚΕΣ ΕΥΡΗΜΑΤΑ:\n• Ανύψωση ST\n• Παθολογικά κύματα Q\n• Αντιστροφή κύματος T\n\nΑΞΙΟΛΟΓΗΣΗ: Ανιχνεύθηκε οξύ έμφραγμα μυοκαρδίου.",
        'Abnormal_Heartbeat': "ΑΝΙΧΝΕΥΣΗ ΚΑΡΔΙΑΚΗΣ ΑΡΡΥΘΜΙΑΣ\n\n⚠️ ΑΠΑΙΤΕΙ ΚΑΡΔΙΟΛΟΓΙΚΗ ΑΞΙΟΛΟΓΗΣΗ\n\nΚΛΙΝΙΚΕΣ ΕΥΡΗΜΑΤΑ:\n• Ανώμαλος καρδιακός ρυθμός\n• Ανώμαλα μοτίβα ρυθμού\n• Διαταραχές αγωγιμότητας\n\nΣΥΝΙΣΤΩΜΕΝΑ ΜΕΤΡΑ:\n1. Επείγουσα καρδιολογική συμβουλή\n2. Συνεχής παρακολούθηση\n3. Αποφύγετε την καφεΐνη",
        'MI_history': "ΙΣΤΟΡΙΚΟ ΕΜΦΡΑΓΜΑΤΟΣ ΜΥΟΚΑΡΔΙΟΥ\n\n⚠️ ΑΠΑΙΤΕΙ ΣΥΝΕΧΗ ΔΙΑΧΕΙΡΙΣΗ\n\nΚΛΙΝΙΚΕΣ ΕΥΡΗΜΑΤΑ:\n• Παθολογικά κύματα Q\n• Ανωμαλίες ST-T\n• Ουλή μυοκαρδίου\n\nΑΞΙΟΛΟΓΗΣΗ: Παλαιό έμφραγμα ανιχνεύθηκε. Απαιτείται συνεχής παρακολούθηση."
    },
    'he': {
        'Normal': "קצב סינוס תקין - קרדיוגרמה בריאה\n\nממצאים קליניים:\n• דופק: 60-100 BPM\n• גלי P: תקינים\n• מרווח PR: 120-200ms\n• קומפלקס QRS: <120ms\n• ללא הפרעות קצב\n\nהערכה: הלב שלך בריא ותקין.",
        'Myocardial_Infarction': "אוטם שריר הלב חריף - קריטי\n\n⚠️ דורש יעוץ רפואי חירום מידי\n\nממצאים קליניים:\n• הרמת סגמנט ST\n• גלי Q פתולוגיים\n• היפוך גל T\n\nהערכה: אוטם שריר לב חריף detektado.",
        'Abnormal_Heartbeat': "הפרעת קצב לב זוהתה\n\n⚠️ דורשת הערכה קרדיולוגית\n\nממצאים קליניים:\n• קצב לב לא קבוע\n• דפוסי קצב חריגים\n• הפרעות הולכה\n\nצעדים מומלצים:\n1. ייעוץ קרדיולוגי דחוף\n2. ניטור רציף\n3. הימנע מקפאין",
        'MI_history': "היסטוריה של אוטם שריר לב\n\n⚠️ דורש ניהול מתמשך\n\nממצאים קליניים:\n• גלי Q פתולוגיים\n• הפרעות ST-T\n• צלקת שריר לב\n\nהערכה: אוטם ישן זוהה. ניטור מתמשך הכרחי."
    },
    'uk': {
        'Normal': "НОРМАЛЬНИЙ СИНУСОВИЙ РИТМ - ЗДОРОВЕ ЕКГ\n\nКЛІНІЧНІ ЗНАХОДЖЕННЯ:\n• Частота серцебиття: 60-100 BPM\n• Зубці P: Норма\n• Інтервал PR: 120-200ms\n• Комплекс QRS: <120ms\n• Аритмій не виявлено\n\nОЦІНКА: Ваше серце здорове і нормальне.",
        'Myocardial_Infarction': "ГОСТРИЙ ІНФАРКТ МІОКАРДА - КРИТИЧНИЙ\n\n⚠️ ПОТРЕБУЄ НЕГАЙНОЇ МЕДИЧНОЇ ДОПОМОГИ\n\nКЛІНІЧНІ ЗНАХОДЖЕННЯ:\n• Піднесення ST\n• Патологічні зубці Q\n• Інверсія зубця T\n\nОЦІНКА: Виявлено гострий інфаркт міокарда.",
        'Abnormal_Heartbeat': "ВИЯВЛЕНА СЕРЦЕВА АРИТМІЯ\n\n⚠️ ПОТРЕБУЄ КАРДІОЛОГІЧНОЇ ОЦІНКИ\n\nКЛІНІЧНІ ЗНАХОДЖЕННЯ:\n• Нерегулярний серцевий ритм\n• Аномальні моделі серцебиття\n• Порушення провідності\n\nРЕКОМЕНДОВАНІ ДІЇ:\n1. Термінова консультація кардіолога\n2. Постійний моніторинг\n3. Уникайте кофеїну",
        'MI_history': "ІСТОРІЯ ІНФАРКТУ МІОКАРДА\n\n⚠️ ПОТРЕБУЄ ПОСТІЙНОГО УПРАВЛІННЯ\n\nКЛІНІЧНІ ЗНАХОДЖЕННЯ:\n• Патологічні зубці Q\n• Аномалії ST-T\n• Рубець міокарда\n\nОЦІНКА: Виявлено старий інфаркт. Постійний моніторинг необхідний."
    },
    'fa': {
        'Normal': "ریتم سینوسی نرمال - الکتروکاردیوگرام سالم\n\nیافته های بالینی:\n• نرخ ضربان قلب: 60-100 BPM\n• موج P: نرمال\n• بازه PR: 120-200ms\n• کمپلکس QRS: <120ms\n• بدون آریتمی\n\nارزیابی: قلب شما سالم و نرمال است.",
        'Myocardial_Infarction': "سکته حاد قلبی - حیاتی\n\n⚠️ نیاز به مراقبت اورژانسی فوری\n\nیافته های بالینی:\n• بالاشدگی ST\n• موج Q پاتولوژیک\n• معکوس شدن موج T\n\nارزیابی: سکته حاد قلبی تشخیص داده شد.",
        'Abnormal_Heartbeat': "آریتمی قلبی تشخیص داده شد\n\n⚠️ نیاز به ارزیابی کاردیولوژی\n\nیافته های بالینی:\n• ضربان قلب نامنظم\n• الگوهای نرخ ضربان غیرطبیعی\n• ناهنجاری های رسانایی\n\nاقدامات پیشنهادی:\n1. مشاوره کاردیولوژی فوری\n2. نظارت مستمر\n3. اجتناب از کافئین",
        'MI_history': "سابقه سکته قلبی\n\n⚠️ نیاز به مدیریت مستمر\n\nیافته های بالینی:\n• موج Q پاتولوژیک\n• ناهنجاری های ST-T\n• اسکار عضله قلب\n\nارزیابی: سکته قدیمی شناسایی شد. نظارت مستمر ضروری است."
    },
    'bn': {
        'Normal': "সাধারণ সাইনাস লয় - স্বাস্থ্যকর ইসিজি\n\nক্লিনিক্যাল অনুসন্ধান:\n• হৃদস্পন্দন: 60-100 BPM\n• P-তরঙ্গ: সাধারণ\n• PR ব্যবধান: 120-200ms\n• QRS জটিল: <120ms\n• কোন অ্যারিদমিয়া নেই\n\nমূল্যায়ন: আপনার হৃদয় সুস্থ এবং স্বাভাবিক।",
        'Myocardial_Infarction': "তীব্র হৃদপেশী সংকোচন - জরুরি\n\n⚠️ তাৎক্ষণিক জরুরী চিকিৎসার প্রয়োজন\n\nক্লিনিক্যাল অনুসন্ধান:\n• ST উন্নতি\n• রোগজনক Q-তরঙ্গ\n• T-তরঙ্গ বিপরীত\n\nমূল্যায়ন: তীব্র হৃদপেশী সংকোচন সনাক্ত করা হয়েছে।",
        'Abnormal_Heartbeat': "অস্বাভাবিক হৃদস্পন্দন সনাক্ত করা হয়েছে\n\n⚠️ কার্ডিওলজি মূল্যায়নের প্রয়োজন\n\nক্লিনিক্যাল অনুসন্ধান:\n• অনিয়মিত হৃদস্পন্দন\n• অস্বাভাবিক গতির নিদর্শন\n• পরিবহন অস্বাভাবিকতা\n\nসুপারিশকৃত পদক্ষেপ:\n1. জরুরী কার্ডিওলজি পরামর্শ\n2. ক্রমাগত নিরীক্ষণ\n3. ক্যাফেইন এড়ান",
        'MI_history': "হৃদপেশী সংকোচনের ইতিহাস\n\n⚠️ ক্রমাগত ব্যবস্থাপনার প্রয়োজন\n\nক্লিনিক্যাল অনুসন্ধান:\n• রোগজনক Q-তরঙ্গ\n• ST-T অস্বাভাবিকতা\n• হৃদপেশী দাগ\n\nমূল্যায়ন: পুরানো MI সনাক্ত করা হয়েছে। ক্রমাগত নিরীক্ষণ প্রয়োজন।"
    },
    'ta': {
        'Normal': "சாதாரண சைனஸ் ரைதம் - ஆரோக்கியமான ஈசிஜி\n\nக்ளினிக்கல் கண்டுபிடிப்புகள்:\n• இதய துடிப்பு: 60-100 BPM\n• P-அலைகள்: சாதாரணம்\n• PR இடைவெளி: 120-200ms\n• QRS வளாக: <120ms\n• உயர்-உயர்ந்த நிலை இல்லை\n\nமதிப்பீடு: உங்கள் இதயம் ஆரோக்கியமாக உள்ளது.",
        'Myocardial_Infarction': "கடுமையான இதய சதையின் சேதம் - கவலைக்குரியம்\n\n⚠️ உடனடி வைத்যசாలை சிகிச்சை தேவை\n\nக்ளினிக்கல் கண்டுபிடிப்புகள்:\n• ST உயர்வு\n• நோய்তாய P அலைகள்\n• T-அலை சுழல்\n\nமதிப்பீடு: கடுமையான இதய நெலத்தின் சேதம் கண்டறியப்பட்டுள்ளது.",
        'Abnormal_Heartbeat': "விசித்திர இதய துடிப்பு கண்டறியப்பட்டுள்ளது\n\n⚠️ இதய மருத்துவ மதிப்பீடு தேவை\n\nக்ளினிக்கல் கண்டுபிடிப்புகள்:\n• வழக்கமற்ற இதய துடிப்பு\n• அசாதாரண விகிதம் வடிவ\n• நடத்தை கோளாறுகள்\n\nபரிந்துரைக்கப்பட்ட நடவடிக்கைகள்:\n1. அவசர இதய மருத்துவ ஆலோசனை\n2. தொடர்ந்து கண்காணிப்பு\n3. காபி தவிர்க்கவும்",
        'MI_history': "இதய சேதத்தின் வரலாறு\n\n⚠️ தொடர்ந்து மருத்துவ கவனம் தேவை\n\nக்ளினிக்கல் கண்டுபிடிப்புகள்:\n• நோய்தாய Q அலைகள்\n• ST-T கோளாறுகள்\n• இதய சேதத்தின் வடு\n\nமதிப்பீடு: பழைய சேதம் கண்டறியப்பட்டுள்ளது। இடைத்தர தொடர்ந்து பர்வ கண்காணிப்பு।"
    },
    'te': {
        'Normal': "సాధారణ సైనస్ రిథమ్ - ఆరోగ్యకరమైన ECG\n\nక్లినికల్ ఫైండింగ్‌లు:\n• హృదయ స్పందన: 60-100 BPM\n• P-తరంగాలు: సాధారణ\n• PR విరామం: 120-200ms\n• QRS సంక్లిష్టం: <120ms\n• అరిథ్మియా లేదు\n\nమూల్యాంకనం: మీ హృదయం ఆరోగ్యకరమైనది మరియు సాధారణమైనది.",
        'Myocardial_Infarction': "తీవ్రమైన హృదయ సక్రియ కణజాల నష్టం - విమర్శనీయమైన\n\n⚠️ తక్షణ ఆపత్కాల సంరక్షణ అవసరం\n\nక్లినికల్ ఫైండింగ్‌లు:\n• ST ఎలివేషన్\n• పాథోలాజికల్ Q-తరంగాలు\n• T-తరంగ ఇన్‌వర్సన్\n\nమూల్యాంకనం: తీవ్రమైన హృదయ నష్టం గుర్తించబడింది.",
        'Abnormal_Heartbeat': "ఆనిర్దిష్ట హృదయ స్పందన గుర్తించబడింది\n\n⚠️ కార్డియోలాజీ మూల్యాంకనం అవసరం\n\nక్లినికల్ ఫైండింగ్‌లు:\n• సక్రియం కానటువంటి హృదయ స్పందన\n• అసాధారణ చాలిక నమూనాలు\n• వాహక సమస్యలు\n\nసిఫారసు చేసిన చర్యలు:\n1. సంక్షిప్త కార్డియోలాజీ సంప్రదింపు\n2. నిరంతర పర్యవేక్షణ\n3. కెఫిన్ తొలగించండి",
        'MI_history': "హృదయ అనారోగ్యం యొక్క చరిత్ర\n\n⚠️ నిరంతర ఆయుర్వేద సంరక్షణ అవసరం\n\nక్లినికల్ ఫైండింగ్‌లు:\n• పాథోలాజికల్ Q-తరంగాలు\n• ST-T సమస్యలు\n• హృదయ కణజాల తుప\n\nమూల్యాంకనం: పూర్వ సమస్య గుర్తించబడింది। నిరంతర పర్యవేక్షణ అవసరం."
    },
    'kn': {
        'Normal': "ಸಾಮಾನ್ಯ ಸೈನಸ್ ರಿದಮ್ - ಆರೋಗ್ಯಕರ ECG\n\nಕ್ಲಿನಿಕಲ್ ಸಿದ್ಧಾರ್ಥಗಳು:\n• ಹೃದಯ ಗತಿ: 60-100 BPM\n• P-ಅಲೆಗಳು: ಸಾಮಾನ್ಯ\n• PR ಮಧ್ಯಂತರ: 120-200ms\n• QRS ಸಂಕೀರ್ಣ: <120ms\n• ನರ್ತನ ವಾಯಿ ಇಲ್ಲ\n\nವಿಮರ್ಶೆ: ನಿಮ್ಮ ಹೃದಯ ಆರೋಗ್ಯಕರವಾಗಿದೆ.",
        'Myocardial_Infarction': "ತೀವ್ರ ಹೃದಯ ಸ್ನಾಯು ಸಾವು - ವಿವರ್ತನೆ\n\n⚠️ ತಕ್ಷಣ ಜರುರಿ ಸೇವೆ ಬೇಕಾಗಿದೆ\n\nಕ್ಲಿನಿಕಲ್ ಸಿದ್ಧಾರ್ಥಗಳು:\n• ST ಎತ್ತರ\n• ರೋಗಲಕ್ಷಣ Q-ಅಲೆಗಳು\n• T-ಅಲೆ ಫೆರಿ\n\nವಿಮರ್ಶೆ: ತೀವ್ರ ಹೃದಯ ಸ್ನಾಯು ಸಾವು ಪತ್ತೆ ಆಗಿದೆ.",
        'Abnormal_Heartbeat': "ವಿಪರೀತ ಹೃದಯ ತಾಳ ಕಂಡುಬಂದಿದೆ\n\n⚠️ ಹೃದಯ ವಿಕೃತಿ ಮಾಹಿತಿ ಬೇಕಾಗಿದೆ\n\nಕ್ಲಿನಿಕಲ್ ಸಿದ್ಧಾರ್ಥಗಳು:\n• ಅಸಮನ್ವಿತ ಹೃದಯ ಗತಿ\n• ಅಪ್ರಕ್ರಿಯೆಯ ತಾಳ ಪ್ಯಾಟರ್ನ್‌\n• ನಿರ್ದೇಶಕರ ತೆರಪು\n\nಸೂಚಿತ ಕ್ರಿಯೆ:\n1. ತಕ್ಷಣ ಹೃದಯ ವಿಶೇಷಜ್ಞ ಸಲಹೆ\n2. ಮುಂದುವರೆದ ಕೇಂದ್ರೀಯ\n3. ಕ್ಯಾಫೆಯ್ನ್ ತಪ್ಪಿಸಿ",
        'MI_history': "ಹೃದಯ ಸ್ನಾಯು ಸಾವು ಇತಿಹಾಸ\n\n⚠️ ಮುಂದುವರೆದ ನಿರ್ವಹಣೆ ಬೇಕಾಗಿದೆ\n\nಕ್ಲಿನಿಕಲ್ ಸಿದ್ಧಾರ್ಥಗಳು:\n• ರೋಗಲಕ್ಷಣ Q-ಅಲೆಗಳು\n• ST-T ವಿಕೃತಿಗಳು\n• ಹೃದಯ ಸ್ನಾಯು ಅಂಗಾರ\n\nವಿಮರ್ಶೆ: ಹಳೆಯ ಸಾವು ಪತ್ತೆ ಆಗಿದೆ। ಮುಂದುವರೆದ ಮೇಲ್ವಿವರಣೆ ಅಗತ್ಯವಾಗಿದೆ."
    },
    'ml': {
        'Normal': "സാധാരണ സൈനസ് റിതം - ആരോഗ്യകരമായ ECG\n\nക്ലിനിക്കൽ കണ്ടെത്തലുകൾ:\n• ഹൃദയ കുത്ത്: 60-100 BPM\n• P-തരംഗങ്ങൾ: സാധാരണ\n• PR ഇടവേള: 120-200ms\n• QRS സമ്പ്ലെക്സ്: <120ms\n• ഹൃദയ താൾ വിപരീയത ഇല്ല\n\nമൂല്യനിരണയം: നിങ്ങളുടെ ഹൃദയം ആരോഗ്യകരമാണ്.",
        'Myocardial_Infarction': "നിരൂപണ ഹൃദയ പേശി നഷ്ടം - വിഷമകരം\n\n⚠️ താൽകാലിക എമർജൻസി സഹായം ആവശ്യം\n\nക്ലിനിക്കൽ കണ്ടെത്തലുകൾ:\n• ST ഉയർവ്\n• പാതോലജി Q-തരംഗങ്ങൾ\n• T-തരംഗ വിപരീയത\n\nമൂല്യനിരണയം: നിരൂപണ ഹൃദയ പേശി നഷ്ടം കണ്ടെത്തി.",
        'Abnormal_Heartbeat': "അസാധാരണ ഹൃദയ താൾ കണ്ടെത്തി\n\n⚠️ കാർഡിയോലജി പരിശോധന ആവശ്യം\n\nക്ലിനിക്കൽ കണ്ടെത്തലുകൾ:\n• ക്രമരഹിത ഹൃദയ താൾ\n• അസാധാരണ താൾ സാധാരണ\n• വഹനയോഗ്യത വിക്ഷേപണം\n\nശുപാരിശ കാര്യങ്ങൾ:\n1. അത്യാര്ജ കാർഡിയോലജി ആലോചന\n2. സ്ഥിരമായ നിരീക്ഷണം\n3. കാഫിൻ ഒഴിവാക്കുക",
        'MI_history': "ഹൃദയ പേശി നഷ്ടത്തിന്റെ ചരിത്രം\n\n⚠️ തുടരുന്ന ചികിത്സ ആവശ്യം\n\nക്ലിനിക്കൽ കണ്ടെത്തലുകൾ:\n• പാതോലജി Q-തരംഗങ്ങൾ\n• ST-T വിപരീയത\n• ഹൃദയ പേശി പകർപ്പ്\n\nമൂല്യനിരണയം: പഴയ നഷ്ടം കണ്ടെത്തി। സ്ഥിരമായ നിരീക്ഷണം ആവശ്യം."
    }
}

def get_clinical_summary_for_language(diagnosis: str, language: str = "en") -> str:
    """
    Get clinical summary for a specific diagnosis in the selected language.
    Falls back to English if language not available.
    """
    # Try to get summary in the requested language
    if language in CLINICAL_SUMMARIES and diagnosis in CLINICAL_SUMMARIES[language]:
        return CLINICAL_SUMMARIES[language][diagnosis]
    
    # Fallback to English if language or diagnosis not found
    if diagnosis in CLINICAL_SUMMARIES.get('en', {}):
        return CLINICAL_SUMMARIES['en'][diagnosis]
    
    # Default fallback
    return "Analysis completed."
