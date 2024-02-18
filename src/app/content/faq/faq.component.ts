import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string[];
  expanded: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqList: FaqItem[] = [
    { question: 'اشنو لي متميز بيه ولي يخليني نشري الدورة ديالك ؟', answer: ['كنقدمو ليك فالدورة ديالنا تدريب احترافي كتكون من 4 أجزاء مدتها 60 يوم','النظري: كنقدمو فيه كل مكتحتاج باش تولي متداول محترف (اتجاه السوق. تحديد المناطق القوية. توقيت الجيد للدخول فالشموع اليابانية بالطريقة الصحيحة. إدارة المخاطر محكمة يمكنك تجاوز بها أي تحدي للشركة التمويل.)','التطبيقي: هدشي لي شرحنا ليك فالنظري كتطبقو وكنتبع معاك الأخطاء لي كتقوم بيها وكنصححوها','التتبع: أهم مرحلة فهاد الدورة لأننا الحمدلله متميزين بها. هنا كنفتحو حساب تجريبي باش كنشوفو خدمتك و كنتبعو معاك بشكل مدقق أغلاط لي كتقوم بيها وكنصححوها','التداول المباشر: هاد المرحلة كتفوق كل المراحل لي سبقو حيت دكشي لي قريتي كنخدموه فحساب حقيقي وكيدوز واحد واحد كيعطينا التحليل لي خدم وكناقشوه جميعا فواحد الجو عائلي. كنخدمو لندن ونيويورك سيشن.'], expanded: false },
    { question: 'سمعت أنه لي دخل للدورة ديالكم ومستافدش كترجعو ليه فلوسو واش بصح ؟', answer: ['صحيح ولكن وفق شرط معين لي هو خصك تحضر جميع الحصص لأن سمعتنا أهم من المال وهدشي درناه باش نحاربو ظاهرة النصب في مجال التداول'], expanded: false },
    { question: 'الدورة أونلاين أو حضورية ؟ وإذا كانت أونلاين واش الحصص مباشرة ام مسجلة ؟ ', answer: ['حاليا الدورة تقدم أونلاين و الحصص كتكون مباشرةعن طريق التطبيق زووم باش كيمكن لك تسول ونجاوبوك. وأيضا كتكون مسجلة بالنسبة لا كيتعذر عليه الحضور'], expanded: false },
    { question: 'الدورة واش صالحة للمبتدئين ؟ ', answer: ['لا ضروري تكون عندك فكرة على المجال وطالق يديك شوية فالشارت'], expanded: false },
    { question: ' بالنسبة لمرحلة التتبع كيفاش كدوز ', answer: ['كتكون فيها 8 دالحصص فهي كافية أنك تعرف على أغلاطك.','كتفتحو حساب تجريبي وكتديرو تحليل لبعض الأسواق وكنطلع واحد بواحد كناقش معاه علاش خدم هدي بهاد الطريقة وهاكيفاش خصو يخدمها'], expanded: false },
    { question: 'الدورة شحال كيكون فيها من طالب ؟ ', answer: ['العدد محدود مكيتعداش 15 الشخص هذا كيساعدنا أننا يكون عندنا وقت لكل واحد فيكم باش نعطيوه حقو فالتتبع'], expanded: false },
    { question: 'اشنو التحليل لي كتعتامدو عليه وواش صالح لجميع الأسواق ؟ ', answer: ['نعم صالح لجميع الأسواق. وكنشتغلو بالتحليل الكلاسيكي البرايس أكشن.'], expanded: false },
    { question: 'فاش كتسالي مدة الدورة كيتقطع بيكم الاتصال ؟ ', answer: ['بالعكس كتدخل فمجموعة الخاصة فايسبوك تما اتعرف على العائلة الكبيرة لي فيها جميع الطلبة لي دازو قبلك وكتشتغلو مجموعين بنفس المنهجية والاستراتيجية لي قريتو.'], expanded: false },
  ];

  toggleAnswer(index: number) {
    var test=!this.faqList[index].expanded;
    this.faqList.forEach(element => {
        element.expanded=false;
    });
    this.faqList[index].expanded = test;
  }
}