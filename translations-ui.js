
import { SOCIALHUB_LANGUAGES } from "./translations.js";

/*
 * SocialHub dashboard translation engine
 * Translates visible text, dynamic elements and common attributes.
 */

const RTL_LANGUAGES = new Set(["ar", "fa", "ur"]);

const UI = {
  en: {
    "القائمة الرئيسية": "Main menu",
    "الرئيسية": "Dashboard",
    "لوحة التحكم": "Dashboard",
    "حساباتي": "My accounts",
    "المنشورات": "Posts",
    "الجدولة": "Schedule",
    "التحليلات": "Analytics",
    "إدارة المنصة": "Platform management",
    "الاشتراكات والباقات": "Plans & billing",
    "مكتبة المحتوى": "Content library",
    "الإعدادات": "Settings",
    "عرض الباقات": "View plans",
    "الباقة الحالية": "Current plan",
    "مجانية": "Free",
    "تصدير البيانات": "Export data",
    "إضافة حساب": "Add account",
    "＋ إضافة حساب": "＋ Add account",
    "إدارة حساباتي": "Manage my accounts",
    "أهلًا بك في SocialHub 👋": "Welcome to SocialHub 👋",
    "نظّم حساباتك الاجتماعية من مكان واحد.": "Organize your social accounts in one place.",
    "تابع حضورك على منصات التواصل": "Manage your social media presence",
    "إجمالي الحسابات": "Total accounts",
    "الحسابات المضافة": "Added accounts",
    "المنصات المستخدمة": "Platforms used",
    "منصات لديها حسابات": "Platforms with accounts",
    "منشورات تجريبية": "Demo posts",
    "مسودات محفوظة محليًا": "Drafts saved locally",
    "منصات التواصل الاجتماعي": "Social media platforms",
    "اختر منصة لعرض حساباتها أو إضافة حساب جديد.": "Choose a platform to view its accounts or add a new account.",
    "كل الحسابات": "All accounts",
    "أحدث الحسابات": "Recent accounts",
    "عرض الكل": "View all",
    "ابحث باسم الحساب أو المستخدم...": "Search account name or username...",
    "كل المنصات": "All platforms",
    "الأحدث أولًا": "Newest first",
    "الاسم أبجديًا": "Name A–Z",
    "حسب المنصة": "By platform",
    "أضف حساباتك ورتّبها وابحث بينها.": "Add, organize, and search your accounts.",
    "إضافة حساب هنا لا تربطه فعليًا بالمنصة.": "Adding an account here does not connect it to the platform.",
    "إنشاء مسودة جديدة": "Create a new draft",
    "عنوان المنشور": "Post title",
    "المنصات المستهدفة": "Target platforms",
    "محتوى المنشور": "Post content",
    "حفظ المسودة": "Save draft",
    "إلغاء التعديل": "Cancel edit",
    "المسودات المحفوظة": "Saved drafts",
    "حفظ في المكتبة": "Save to library",
    "المحتوى المحفوظ": "Saved content",
    "＋ إضافة موعد نشر": "＋ Add publishing time",
    "اختر المسودة": "Choose draft",
    "منصة النشر": "Publishing platform",
    "تاريخ ووقت النشر": "Publishing date and time",
    "حفظ موعد النشر": "Save schedule",
    "المواعيد القادمة": "Upcoming schedules",
    "البحث في الحسابات": "Search accounts",
    "تصفية حسب المنصة": "Filter by platform",
    "ترتيب الحسابات": "Sort accounts",
    "مثال: عرض جديد للمتابعين": "Example: A new offer for followers",
    "اكتب نص المنشور هنا...": "Write your post here...",
    "ابحث بعنوان المنشور أو محتواه...": "Search post title or content...",
    "تصفية المسودات حسب المنصة": "Filter drafts by platform",
    "البحث في المسودات": "Search drafts",
    "إلغاء": "Cancel",
    "حفظ": "Save",
    "تعديل": "Edit",
    "حذف": "Delete",
    "لا توجد حسابات حتى الآن": "No accounts yet",
    "لا توجد مسودات محفوظة": "No saved drafts",
    "الأمان والخصوصية": "Security and privacy",
    "تغيير المظهر": "Change theme",
    "فتح القائمة": "Open menu",
    "تسجيل الخروج": "Log out",
    "حساب": "Account",
    "حسابات": "Accounts",
    "محلي": "Local",
    "حد الحسابات": "Account limit",
    "لكل منصة": "per platform",
    "حتى 2 حسابًا لكل منصة": "Up to 2 accounts per platform",
    "حان موعد النشر: ": "Publishing time: ",
    "احفظ مسودة المنشور أولًا ثم اخترها.": "Save the post as a draft first, then select it.",
    "اختر المنصة وتاريخ ووقت النشر.": "Choose a platform and a publishing date and time.",
    "اختر موعدًا في المستقبل.": "Choose a future date and time.",
    "تم تعديل موعد النشر بنجاح.": "Schedule updated successfully.",
    "تم حفظ موعد النشر.": "Schedule saved.",
    "تم تسجيل النشر اليدوي.": "Manual publishing recorded.",
    "تم حذف الموعد.": "Schedule deleted.",
    "لم تتم إضافة حسابات حتى الآن.": "No accounts have been added yet.",
    "هذا الأسبوع": "This week",
    "اليوم": "Today",
    "الأسبوع الماضي": "Last week",
    "المنصة": "Platform",
    "اسم الحساب": "Account name",
    "اسم المستخدم": "Username",
    "الرابط": "Link",
    "إضافة": "Add",
    "رجوع": "Back",
    "التالي": "Next",
    "السابق": "Previous",
    "بحث": "Search",
    "حالة الحساب": "Account status",
    "نشط": "Active",
    "غير متصل": "Not connected",
    "لا توجد نتائج": "No results",
    "هذه نسخة تجريبية. البيانات محفوظة في هذا المتصفح فقط، ولا يوجد اتصال فعلي بالمنصات أو نشر تلقائي أو دفع إلكتروني.": "This is a demo. Data is stored only in this browser. There are no live platform connections, automatic publishing, or electronic payments.",
    "تُحفظ المسودات على هذا المتصفح والجهاز فقط. لا يتم نشر المحتوى تلقائيًا على منصات التواصل الاجتماعي.": "Drafts are stored only in this browser and on this device. Content is not automatically published to social media.",
    "لا تدخل كلمات المرور أو رموز الدخول السرية في هذه النسخة التجريبية.": "Do not enter passwords or secret login codes in this demo."
  },

  fr: {
    "الرئيسية": "Accueil", "لوحة التحكم": "Tableau de bord",
    "حساباتي": "Mes comptes", "المنشورات": "Publications",
    "الجدولة": "Planification", "التحليلات": "Analyses",
    "إدارة المنصة": "Gestion des plateformes",
    "الاشتراكات والباقات": "Abonnements et forfaits",
    "مكتبة المحتوى": "Bibliothèque de contenu",
    "الإعدادات": "Paramètres", "عرض الباقات": "Voir les forfaits",
    "الباقة الحالية": "Forfait actuel", "مجانية": "Gratuit",
    "تصدير البيانات": "Exporter les données",
    "إضافة حساب": "Ajouter un compte",
    "إدارة حساباتي": "Gérer mes comptes",
    "إجمالي الحسابات": "Nombre total de comptes",
    "كل الحسابات": "Tous les comptes", "عرض الكل": "Tout afficher",
    "حفظ": "Enregistrer", "تعديل": "Modifier",
    "حذف": "Supprimer", "إلغاء": "Annuler",
    "تسجيل الخروج": "Déconnexion", "محلي": "Local",
    "لا توجد حسابات حتى الآن": "Aucun compte pour le moment"
  },

  es: {
    "الرئيسية": "Inicio", "لوحة التحكم": "Panel",
    "حساباتي": "Mis cuentas", "المنشورات": "Publicaciones",
    "الجدولة": "Programación", "التحليلات": "Analítica",
    "إدارة المنصة": "Gestión de plataformas",
    "الاشتراكات والباقات": "Planes y suscripciones",
    "مكتبة المحتوى": "Biblioteca de contenido",
    "الإعدادات": "Configuración", "عرض الباقات": "Ver planes",
    "الباقة الحالية": "Plan actual", "مجانية": "Gratis",
    "تصدير البيانات": "Exportar datos",
    "إضافة حساب": "Añadir cuenta",
    "إدارة حساباتي": "Gestionar mis cuentas",
    "إجمالي الحسابات": "Total de cuentas",
    "كل الحسابات": "Todas las cuentas", "عرض الكل": "Ver todo",
    "حفظ": "Guardar", "تعديل": "Editar",
    "حذف": "Eliminar", "إلغاء": "Cancelar",
    "تسجيل الخروج": "Cerrar sesión", "محلي": "Local",
    "لا توجد حسابات حتى الآن": "Todavía no hay cuentas"
  },

  de: {
    "الرئيسية": "Dashboard", "لوحة التحكم": "Dashboard",
    "حساباتي": "Meine Konten", "المنشورات": "Beiträge",
    "الجدولة": "Zeitplanung", "التحليلات": "Analysen",
    "إدارة المنصة": "Plattformverwaltung",
    "الاشتراكات والباقات": "Tarife und Abos",
    "مكتبة المحتوى": "Inhaltsbibliothek",
    "الإعدادات": "Einstellungen", "عرض الباقات": "Tarife anzeigen",
    "الباقة الحالية": "Aktueller Tarif", "مجانية": "Kostenlos",
    "تصدير البيانات": "Daten exportieren",
    "إضافة حساب": "Konto hinzufügen",
    "إدارة حساباتي": "Meine Konten verwalten",
    "إجمالي الحسابات": "Konten insgesamt",
    "كل الحسابات": "Alle Konten", "عرض الكل": "Alle anzeigen",
    "حفظ": "Speichern", "تعديل": "Bearbeiten",
    "حذف": "Löschen", "إلغاء": "Abbrechen",
    "تسجيل الخروج": "Abmelden", "محلي": "Lokal",
    "لا توجد حسابات حتى الآن": "Noch keine Konten vorhanden"
  },

  it: {
    "الرئيسية": "Dashboard", "لوحة التحكم": "Dashboard",
    "حساباتي": "I miei account", "المنشورات": "Post",
    "الجدولة": "Programmazione", "التحليلات": "Analisi",
    "إدارة المنصة": "Gestione piattaforme",
    "الاشتراكات والباقات": "Piani e abbonamenti",
    "مكتبة المحتوى": "Libreria contenuti",
    "الإعدادات": "Impostazioni", "عرض الباقات": "Visualizza piani",
    "الباقة الحالية": "Piano attuale", "مجانية": "Gratuito",
    "تصدير البيانات": "Esporta dati",
    "إضافة حساب": "Aggiungi account",
    "إدارة حساباتي": "Gestisci i miei account",
    "إجمالي الحسابات": "Account totali",
    "كل الحسابات": "Tutti gli account", "عرض الكل": "Visualizza tutto",
    "حفظ": "Salva", "تعديل": "Modifica",
    "حذف": "Elimina", "إلغاء": "Annulla",
    "تسجيل الخروج": "Esci", "محلي": "Locale",
    "لا توجد حسابات حتى الآن": "Nessun account presente"
  },

  pt: {
    "الرئيسية": "Painel", "لوحة التحكم": "Painel",
    "حساباتي": "Minhas contas", "المنشورات": "Publicações",
    "الجدولة": "Agendamento", "التحليلات": "Análises",
    "إدارة المنصة": "Gestão de plataformas",
    "الاشتراكات والباقات": "Planos e assinaturas",
    "مكتبة المحتوى": "Biblioteca de conteúdo",
    "الإعدادات": "Configurações", "عرض الباقات": "Ver planos",
    "الباقة الحالية": "Plano atual", "مجانية": "Grátis",
    "تصدير البيانات": "Exportar dados",
    "إضافة حساب": "Adicionar conta",
    "إدارة حساباتي": "Gerenciar minhas contas",
    "إجمالي الحسابات": "Total de contas",
    "كل الحسابات": "Todas as contas", "عرض الكل": "Ver tudo",
    "حفظ": "Salvar", "تعديل": "Editar",
    "حذف": "Excluir", "إلغاء": "Cancelar",
    "تسجيل الخروج": "Sair", "محلي": "Local",
    "لا توجد حسابات حتى الآن": "Ainda não há contas"
  },

  ru: {
    "الرئيسية": "Главная", "لوحة التحكم": "Панель управления",
    "حساباتي": "Мои аккаунты", "المنشورات": "Публикации",
    "الجدولة": "Расписание", "التحليلات": "Аналитика",
    "إدارة المنصة": "Управление платформами",
    "الاشتراكات والباقات": "Тарифы и подписки",
    "مكتبة المحتوى": "Библиотека контента",
    "الإعدادات": "Настройки", "عرض الباقات": "Посмотреть тарифы",
    "الباقة الحالية": "Текущий тариф", "مجانية": "Бесплатно",
    "تصدير البيانات": "Экспорт данных",
    "إضافة حساب": "Добавить аккаунт",
    "إدارة حساباتي": "Управление моими аккаунтами",
    "إجمالي الحسابات": "Всего аккаунтов",
    "كل الحسابات": "Все аккаунты", "عرض الكل": "Показать все",
    "حفظ": "Сохранить", "تعديل": "Изменить",
    "حذف": "Удалить", "إلغاء": "Отмена",
    "تسجيل الخروج": "Выйти", "محلي": "Локально",
    "لا توجد حسابات حتى الآن": "Пока нет аккаунтов"
  },

  tr: {
    "الرئيسية": "Ana sayfa", "لوحة التحكم": "Kontrol paneli",
    "حساباتي": "Hesaplarım", "المنشورات": "Gönderiler",
    "الجدولة": "Planlama", "التحليلات": "Analizler",
    "إدارة المنصة": "Platform yönetimi",
    "الاشتراكات والباقات": "Planlar ve abonelikler",
    "مكتبة المحتوى": "İçerik kütüphanesi",
    "الإعدادات": "Ayarlar", "عرض الباقات": "Planları görüntüle",
    "الباقة الحالية": "Mevcut plan", "مجانية": "Ücretsiz",
    "تصدير البيانات": "Verileri dışa aktar",
    "إضافة حساب": "Hesap ekle",
    "إدارة حساباتي": "Hesaplarımı yönet",
    "إجمالي الحسابات": "Toplam hesap",
    "كل الحسابات": "Tüm hesaplar", "عرض الكل": "Tümünü gör",
    "حفظ": "Kaydet", "تعديل": "Düzenle",
    "حذف": "Sil", "إلغاء": "İptal",
    "تسجيل الخروج": "Çıkış yap", "محلي": "Yerel",
    "لا توجد حسابات حتى الآن": "Henüz hesap yok"
  },

  fa: {
    "الرئيسية": "داشبورد", "لوحة التحكم": "داشبورد",
    "حساباتي": "حساب‌های من", "المنشورات": "پست‌ها",
    "الجدولة": "زمان‌بندی", "التحليلات": "تحلیل‌ها",
    "إدارة المنصة": "مدیریت پلتفرم‌ها",
    "الاشتراكات والباقات": "طرح‌ها و اشتراک‌ها",
    "مكتبة المحتوى": "کتابخانه محتوا",
    "الإعدادات": "تنظیمات", "عرض الباقات": "مشاهده طرح‌ها",
    "الباقة الحالية": "طرح فعلی", "مجانية": "رایگان",
    "تصدير البيانات": "خروجی گرفتن از داده‌ها",
    "إضافة حساب": "افزودن حساب",
    "إدارة حساباتي": "مدیریت حساب‌های من",
    "إجمالي الحسابات": "تعداد کل حساب‌ها",
    "كل الحسابات": "همه حساب‌ها", "عرض الكل": "مشاهده همه",
    "حفظ": "ذخیره", "تعديل": "ویرایش",
    "حذف": "حذف", "إلغاء": "لغو",
    "تسجيل الخروج": "خروج", "محلي": "محلی",
    "لا توجد حسابات حتى الآن": "هنوز حسابی اضافه نشده است"
  },

  ur: {
    "الرئيسية": "ڈیش بورڈ", "لوحة التحكم": "ڈیش بورڈ",
    "حساباتي": "میرے اکاؤنٹس", "المنشورات": "پوسٹس",
    "الجدولة": "شیڈول", "التحليلات": "تجزیات",
    "إدارة المنصة": "پلیٹ فارم مینجمنٹ",
    "الاشتراكات والباقات": "پلانز اور سبسکرپشنز",
    "مكتبة المحتوى": "مواد کی لائبریری",
    "الإعدادات": "ترتیبات", "عرض الباقات": "پلان دیکھیں",
    "الباقة الحالية": "موجودہ پلان", "مجانية": "مفت",
    "تصدير البيانات": "ڈیٹا برآمد کریں",
    "إضافة حساب": "اکاؤنٹ شامل کریں",
    "إدارة حساباتي": "میرے اکاؤنٹس کا انتظام",
    "إجمالي الحسابات": "کل اکاؤنٹس",
    "كل الحسابات": "تمام اکاؤنٹس", "عرض الكل": "سب دیکھیں",
    "حفظ": "محفوظ کریں", "تعديل": "ترمیم",
    "حذف": "حذف کریں", "إلغاء": "منسوخ کریں",
    "تسجيل الخروج": "لاگ آؤٹ", "محلي": "مقامی",
    "لا توجد حسابات حتى الآن": "ابھی کوئی اکاؤنٹ نہیں"
  },

  "zh-CN": {
    "الرئيسية": "仪表板", "لوحة التحكم": "仪表板",
    "حساباتي": "我的账户", "المنشورات": "帖子",
    "الجدولة": "计划发布", "التحليلات": "数据分析",
    "إدارة المنصة": "平台管理",
    "الاشتراكات والباقات": "套餐与订阅",
    "مكتبة المحتوى": "内容库", "الإعدادات": "设置",
    "عرض الباقات": "查看套餐", "الباقة الحالية": "当前套餐",
    "مجانية": "免费", "تصدير البيانات": "导出数据",
    "إضافة حساب": "添加账户", "إدارة حساباتي": "管理我的账户",
    "إجمالي الحسابات": "账户总数", "كل الحسابات": "所有账户",
    "عرض الكل": "查看全部", "حفظ": "保存",
    "تعديل": "编辑", "حذف": "删除", "إلغاء": "取消",
    "تسجيل الخروج": "退出登录", "محلي": "本地",
    "لا توجد حسابات حتى الآن": "暂无账户"
  },

  hi: {
    "الرئيسية": "डैशबोर्ड", "لوحة التحكم": "डैशबोर्ड",
    "حساباتي": "मेरे खाते", "المنشورات": "पोस्ट",
    "الجدولة": "शेड्यूल", "التحليلات": "विश्लेषण",
    "إدارة المنصة": "प्लेटफ़ॉर्म प्रबंधन",
    "الاشتراكات والباقات": "प्लान और सदस्यता",
    "مكتبة المحتوى": "कंटेंट लाइब्रेरी", "الإعدادات": "सेटिंग्स",
    "عرض الباقات": "प्लान देखें", "الباقة الحالية": "वर्तमान प्लान",
    "مجانية": "मुफ़्त", "تصدير البيانات": "डेटा निर्यात करें",
    "إضافة حساب": "खाता जोड़ें", "إدارة حساباتي": "मेरे खाते प्रबंधित करें",
    "إجمالي الحسابات": "कुल खाते", "كل الحسابات": "सभी खाते",
    "عرض الكل": "सभी देखें", "حفظ": "सहेजें",
    "تعديل": "संपादित करें", "حذف": "हटाएँ", "إلغاء": "रद्द करें",
    "تسجيل الخروج": "लॉग आउट", "محلي": "स्थानीय",
    "لا توجد حسابات حتى الآن": "अभी कोई खाता नहीं है"
  },

  ja: {
    "الرئيسية": "ダッシュボード", "لوحة التحكم": "ダッシュボード",
    "حساباتي": "マイアカウント", "المنشورات": "投稿",
    "الجدولة": "予約投稿", "التحليلات": "分析",
    "إدارة المنصة": "プラットフォーム管理",
    "الاشتراكات والباقات": "プランと請求",
    "مكتبة المحتوى": "コンテンツライブラリ", "الإعدادات": "設定",
    "عرض الباقات": "プランを見る", "الباقة الحالية": "現在のプラン",
    "مجانية": "無料", "تصدير البيانات": "データをエクスポート",
    "إضافة حساب": "アカウントを追加", "إدارة حساباتي": "アカウントを管理",
    "إجمالي الحسابات": "アカウント総数", "كل الحسابات": "すべてのアカウント",
    "عرض الكل": "すべて表示", "حفظ": "保存",
    "تعديل": "編集", "حذف": "削除", "إلغاء": "キャンセル",
    "تسجيل الخروج": "ログアウト", "محلي": "ローカル",
    "لا توجد حسابات حتى الآن": "アカウントはまだありません"
  },

  ko: {
    "الرئيسية": "대시보드", "لوحة التحكم": "대시보드",
    "حساباتي": "내 계정", "المنشورات": "게시물",
    "الجدولة": "예약", "التحليلات": "분석",
    "إدارة المنصة": "플랫폼 관리",
    "الاشتراكات والباقات": "요금제 및 구독",
    "مكتبة المحتوى": "콘텐츠 라이브러리", "الإعدادات": "설정",
    "عرض الباقات": "요금제 보기", "الباقة الحالية": "현재 요금제",
    "مجانية": "무료", "تصدير البيانات": "데이터 내보내기",
    "إضافة حساب": "계정 추가", "إدارة حساباتي": "내 계정 관리",
    "إجمالي الحسابات": "전체 계정 수", "كل الحسابات": "모든 계정",
    "عرض الكل": "모두 보기", "حفظ": "저장",
    "تعديل": "수정", "حذف": "삭제", "إلغاء": "취소",
    "تسجيل الخروج": "로그아웃", "محلي": "로컬",
    "لا توجد حسابات حتى الآن": "아직 계정이 없습니다"
  },

  id: {
    "الرئيسية": "Dasbor", "لوحة التحكم": "Dasbor",
    "حساباتي": "Akun saya", "المنشورات": "Postingan",
    "الجدولة": "Jadwal", "التحليلات": "Analitik",
    "إدارة المنصة": "Manajemen platform",
    "الاشتراكات والباقات": "Paket dan langganan",
    "مكتبة المحتوى": "Pustaka konten", "الإعدادات": "Pengaturan",
    "عرض الباقات": "Lihat paket", "الباقة الحالية": "Paket saat ini",
    "مجانية": "Gratis", "تصدير البيانات": "Ekspor data",
    "إضافة حساب": "Tambah akun", "إدارة حساباتي": "Kelola akun saya",
    "إجمالي الحسابات": "Total akun", "كل الحسابات": "Semua akun",
    "عرض الكل": "Lihat semua", "حفظ": "Simpan",
    "تعديل": "Edit", "حذف": "Hapus", "إلغاء": "Batal",
    "تسجيل الخروج": "Keluar", "محلي": "Lokal",
    "لا توجد حسابات حتى الآن": "Belum ada akun"
  },

  vi: {
    "الرئيسية": "Bảng điều khiển", "لوحة التحكم": "Bảng điều khiển",
    "حساباتي": "Tài khoản của tôi", "المنشورات": "Bài đăng",
    "الجدولة": "Lịch đăng", "التحليلات": "Phân tích",
    "إدارة المنصة": "Quản lý nền tảng",
    "الاشتراكات والباقات": "Gói và đăng ký",
    "مكتبة المحتوى": "Thư viện nội dung", "الإعدادات": "Cài đặt",
    "عرض الباقات": "Xem gói", "الباقة الحالية": "Gói hiện tại",
    "مجانية": "Miễn phí", "تصدير البيانات": "Xuất dữ liệu",
    "إضافة حساب": "Thêm tài khoản", "إدارة حساباتي": "Quản lý tài khoản",
    "إجمالي الحسابات": "Tổng số tài khoản", "كل الحسابات": "Tất cả tài khoản",
    "عرض الكل": "Xem tất cả", "حفظ": "Lưu",
    "تعديل": "Chỉnh sửa", "حذف": "Xóa", "إلغاء": "Hủy",
    "تسجيل الخروج": "Đăng xuất", "محلي": "Cục bộ",
    "لا توجد حسابات حتى الآن": "Chưa có tài khoản"
  },

  th: {
    "الرئيسية": "แดชบอร์ด", "لوحة التحكم": "แดชบอร์ด",
    "حساباتي": "บัญชีของฉัน", "المنشورات": "โพสต์",
    "الجدولة": "กำหนดเวลา", "التحليلات": "การวิเคราะห์",
    "إدارة المنصة": "จัดการแพลตฟอร์ม",
    "الاشتراكات والباقات": "แพ็กเกจและการสมัครสมาชิก",
    "مكتبة المحتوى": "คลังเนื้อหา", "الإعدادات": "การตั้งค่า",
    "عرض الباقات": "ดูแพ็กเกจ", "الباقة الحالية": "แพ็กเกจปัจจุบัน",
    "مجانية": "ฟรี", "تصدير البيانات": "ส่งออกข้อมูล",
    "إضافة حساب": "เพิ่มบัญชี", "إدارة حساباتي": "จัดการบัญชีของฉัน",
    "إجمالي الحسابات": "บัญชีทั้งหมด", "كل الحسابات": "บัญชีทั้งหมด",
    "عرض الكل": "ดูทั้งหมด", "حفظ": "บันทึก",
    "تعديل": "แก้ไข", "حذف": "ลบ", "إلغاء": "ยกเลิก",
    "تسجيل الخروج": "ออกจากระบบ", "محلي": "ในเครื่อง",
    "لا توجد حسابات حتى الآن": "ยังไม่มีบัญชี"
  },

  bn: {
    "الرئيسية": "ড্যাশবোর্ড", "لوحة التحكم": "ড্যাশবোর্ড",
    "حساباتي": "আমার অ্যাকাউন্ট", "المنشورات": "পোস্ট",
    "الجدولة": "সময়সূচি", "التحليلات": "বিশ্লেষণ",
    "إدارة المنصة": "প্ল্যাটফর্ম ব্যবস্থাপনা",
    "الاشتراكات والباقات": "প্ল্যান ও সাবস্ক্রিপশন",
    "مكتبة المحتوى": "কনটেন্ট লাইব্রেরি", "الإعدادات": "সেটিংস",
    "عرض الباقات": "প্ল্যান দেখুন", "الباقة الحالية": "বর্তমান প্ল্যান",
    "مجانية": "বিনামূল্যে", "تصدير البيانات": "ডেটা রপ্তানি",
    "إضافة حساب": "অ্যাকাউন্ট যোগ করুন", "إدارة حساباتي": "আমার অ্যাকাউন্ট পরিচালনা",
    "إجمالي الحسابات": "মোট অ্যাকাউন্ট", "كل الحسابات": "সব অ্যাকাউন্ট",
    "عرض الكل": "সব দেখুন", "حفظ": "সংরক্ষণ",
    "تعديل": "সম্পাদনা", "حذف": "মুছুন", "إلغاء": "বাতিল",
    "تسجيل الخروج": "লগ আউট", "محلي": "স্থানীয়",
    "لا توجد حسابات حتى الآن": "এখনও কোনো অ্যাকাউন্ট নেই"
  },

  sw: {
    "الرئيسية": "Dashibodi", "لوحة التحكم": "Dashibodi",
    "حساباتي": "Akaunti zangu", "المنشورات": "Machapisho",
    "الجدولة": "Ratiba", "التحليلات": "Uchambuzi",
    "إدارة المنصة": "Usimamizi wa majukwaa",
    "الاشتراكات والباقات": "Mipango na usajili",
    "مكتبة المحتوى": "Maktaba ya maudhui", "الإعدادات": "Mipangilio",
    "عرض الباقات": "Tazama mipango", "الباقة الحالية": "Mpango wa sasa",
    "مجانية": "Bure", "تصدير البيانات": "Hamisha data",
    "إضافة حساب": "Ongeza akaunti", "إدارة حساباتي": "Simamia akaunti zangu",
    "إجمالي الحسابات": "Jumla ya akaunti", "كل الحسابات": "Akaunti zote",
    "عرض الكل": "Tazama zote", "حفظ": "Hifadhi",
    "تعديل": "Hariri", "حذف": "Futa", "إلغاء": "Ghairi",
    "تسجيل الخروج": "Ondoka", "محلي": "Ya ndani",
    "لا توجد حسابات حتى الآن": "Hakuna akaunti bado"
  }
};

const ATTRIBUTES = [
  "placeholder",
  "title",
  "aria-label",
  "data-tooltip"
];

let activeLanguage = "ar";
let observer = null;
let isTranslating = false;

function normalizeLanguage(code) {
  return SOCIALHUB_LANGUAGES.some(language => language.code === code)
    ? code
    : "ar";
}

function getOriginalText(node) {
  if (!Object.prototype.hasOwnProperty.call(node, "__shOriginalText")) {
    node.__shOriginalText = node.nodeValue;
  }
  return node.__shOriginalText;
}

function translateValue(value, map, language) {
  if (language === "ar") return value;

  const trimmed = value.trim();
  if (!trimmed) return value;

  const translated = map[trimmed];
  if (!translated) return value;

  return value.replace(trimmed, translated);
}

function translateTextNodes(root, map, language) {
  if (!root) return;

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT
  );

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  for (const node of nodes) {
    const parent = node.parentElement;

    if (
      !parent ||
      parent.closest(
        "script,style,textarea,input,select,option,code,pre,[data-no-translate]"
      )
    ) {
      continue;
    }

    const original = getOriginalText(node);
    const translated = translateValue(original, map, language);

    if (node.nodeValue !== translated) {
      node.nodeValue = translated;
    }
  }
}

function translateAttributes(root, map, language) {
  if (!root || root.nodeType !== Node.ELEMENT_NODE) return;

  const elements = [root, ...root.querySelectorAll("*")];

  for (const element of elements) {
    if (element.matches("script,style,textarea,input,select,option,[data-no-translate]")) {
      // Inputs can still have translatable placeholders and labels.
      if (!element.matches("input,textarea")) continue;
    }

    for (const attribute of ATTRIBUTES) {
      if (!element.hasAttribute(attribute)) continue;

      const originalKey = `__shOriginal_${attribute}`;

      if (!Object.prototype.hasOwnProperty.call(element, originalKey)) {
        element[originalKey] = element.getAttribute(attribute);
      }

      const original = element[originalKey];
      const translated = translateValue(original, map, language);

      if (element.getAttribute(attribute) !== translated) {
        element.setAttribute(attribute, translated);
      }
    }
  }
}

function translateRoot(root, language) {
  if (!root || isTranslating) return;

  isTranslating = true;

  try {



    const map = UI[language] || UI.en;

    if (root.nodeType === Node.TEXT_NODE) {
      const parent = root.parentElement;
      if (!parent) return;

      if (
        parent.closest(
          "script,style,textarea,input,select,option,code,pre,[data-no-translate]"
        )
      ) {
        return;
      }

      const original = getOriginalText(root);
      root.nodeValue = translateValue(original, map, language);
      return;
    }

    if (root.nodeType === Node.ELEMENT_NODE) {
      translateTextNodes(root, map, language);
      translateAttributes(root, map, language);
    }
  } finally {
    isTranslating = false;
  }
}

export function translateSocialHubDOM(languageCode = "ar") {
  activeLanguage = normalizeLanguage(languageCode);

  if (!document.body) return;

  const rtl = RTL_LANGUAGES.has(activeLanguage);

  document.documentElement.lang = activeLanguage;
  document.documentElement.dir = rtl ? "rtl" : "ltr";
  document.body.dir = rtl ? "rtl" : "ltr";

  translateRoot(document.body, activeLanguage);

  if (observer) observer.disconnect();

  observer = new MutationObserver(mutations => {
    if (isTranslating) return;

    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;

      for (const node of mutation.addedNodes) {
        if (
          node.nodeType === Node.ELEMENT_NODE ||
          node.nodeType === Node.TEXT_NODE
        ) {
          translateRoot(node, activeLanguage);
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
