from rest_framework import generics
from jobs.models import JobOffer
from jobs.api.serializers import JobOfferSerializer

#serializers.pyでブラウザが読み込めるデータに変化したあとのデータをクラスに定義
#https://www.django-rest-framework.org/api-guide/generic-views/#listcreateapiview
#Querysetとは、Djangoに備えられたメソッドで作成した型（今回で言うとDjangoRFのSerializer）に基づいて作成されたobjectのこと
class JobOfferListCreateAPIView(generics.ListCreateAPIView):
    queryset = JobOffer.objects.all().order_by("-id")
    serializer_class = JobOfferSerializer


class JobOfferDetailAPIview(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobOffer.objects.all()
    serializer_class = JobOfferSerializer