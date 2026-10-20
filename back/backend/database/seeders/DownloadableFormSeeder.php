<?php

namespace Database\Seeders;

use App\Enums\FormCategory;
use App\Models\DownloadableForm;
use Illuminate\Database\Seeder;

class DownloadableFormSeeder extends Seeder
{
    /**
     * Seed the forms library. Attach the real PDF later by setting file_path
     * (relative to storage/app/private), e.g. "forms/motor-claim.pdf".
     */
    public function run(): void
    {
        $forms = [
            [FormCategory::Claims, 'نموذج إخطار بحادث سيارة', 'يُعبّأ عند وقوع حادث للإبلاغ عنه وبدء إجراءات التعويض.'],
            [FormCategory::Claims, 'نموذج مطالبة تعويض صحي', 'لطلب استرداد مصاريف العلاج المشمولة بالتغطية.'],
            [FormCategory::Claims, 'نموذج مطالبة تأمين ممتلكات', 'للإبلاغ عن أضرار الحريق أو السرقة أو غيرها.'],
            [FormCategory::Apply, 'طلب تأمين سيارة', 'لإصدار وثيقة تأمين إجباري أو شامل لسيارتك.'],
            [FormCategory::Apply, 'طلب تأمين سفر', 'لإصدار وثيقة تأمين سفر قبل رحلتك.'],
            [FormCategory::Apply, 'طلب تأمين بحري (بضائع)', 'لتأمين الشحنات المستوردة أو المصدّرة.'],
            [FormCategory::Apply, 'طلب تأمين حريق وممتلكات', 'لتأمين المباني والمنشآت ومحتوياتها.'],
            [FormCategory::Apply, 'طلب تأمين طبي جماعي', 'للشركات الراغبة في تأمين موظفيها صحيًا.'],
            [FormCategory::General, 'نموذج تحديث بيانات العميل', 'لتحديث بيانات الاتصال والمعلومات الشخصية.'],
            [FormCategory::General, 'نموذج شكوى أو اقتراح', 'شاركنا ملاحظاتك لنطوّر خدماتنا باستمرار.'],
        ];

        foreach ($forms as $index => [$category, $title, $description]) {
            DownloadableForm::updateOrCreate(
                ['title' => $title],
                ['category' => $category, 'description' => $description, 'sort_order' => $index + 1, 'is_active' => true],
            );
        }
    }
}
