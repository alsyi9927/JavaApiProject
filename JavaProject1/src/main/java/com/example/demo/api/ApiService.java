package com.example.demo.api;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class ApiService {

    @Value("${openapi.serviceKey}")
    private String serviceKey;

    public List<HashMap<String, Object>> getDataFromApi(String lawdCd, String dealYmd) {
        String apiUrl = "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade";

        String url = UriComponentsBuilder.fromHttpUrl(apiUrl)
                .queryParam("serviceKey", serviceKey)
                .queryParam("LAWD_CD", lawdCd)
                .queryParam("DEAL_YMD", dealYmd)
                .build()
                .toUriString();

        try {
            URI uri = new URI(url);
            RestTemplate restTemplate = new RestTemplate();
            System.out.println(uri);
            String apiResponse = restTemplate.getForObject(uri, String.class);

            return parseApiResponse(apiResponse);
        } catch (URISyntaxException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    private List<HashMap<String, Object>> parseApiResponse(String apiResponse) {
        List<HashMap<String, Object>> itemList = new ArrayList<>();

        try {
            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObj = (JSONObject) jsonParser.parse(apiResponse);
            JSONObject response = (JSONObject) jsonObj.get("response");
            JSONObject body = (JSONObject) response.get("body");
            JSONObject items = (JSONObject) body.get("items");
            JSONArray itemArray = (JSONArray) items.get("item");

            for (Object itemObj : itemArray) {
                JSONObject item = (JSONObject) itemObj;
                HashMap<String, Object> map = new HashMap<>();
                map.put("거래금액", item.get("거래금액"));
                map.put("층", item.get("층"));
                map.put("지역코드", item.get("지역코드"));
                map.put("아파트", item.get("아파트"));
                map.put("법정동", item.get("법정동"));
                map.put("년", item.get("년"));
                map.put("월", item.get("월"));
                map.put("일", item.get("일"));
                itemList.add(map);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return itemList;
    }
}
