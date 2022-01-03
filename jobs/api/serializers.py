from rest_framework import serializers
from jobs.models import JobOffer

#Django内のDatabaseの情報をブラウザが読み込めるデータに変換
class JobOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobOffer
        fields = "__all__"