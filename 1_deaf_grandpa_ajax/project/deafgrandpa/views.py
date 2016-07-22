from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse, JsonResponse

class GrandpaView(View):
	template = 'deafgrandpa/index.html'
	def get(self, request):
		return render(request, self.template)

	def post(self, request):
		print('siwenfoainvf')
		print(request.POST)
		x = request.POST['said']
		if x == x.upper():
			return JsonResponse({x:'I CAN HEaR YOYU'})
		else:
			return JsonResponse({x:'I CANT HEAR YOU'})
		
